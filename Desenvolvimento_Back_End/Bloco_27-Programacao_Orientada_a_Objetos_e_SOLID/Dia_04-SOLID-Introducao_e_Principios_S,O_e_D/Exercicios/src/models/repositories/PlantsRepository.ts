import { RowDataPacket } from 'mysql2';
import { IPlant, ISpecialCare } from '../../interfaces/plant.interface';
import Connection from '../Connection';

import 'dotenv/config';

const { DB_DATABASE } = process.env;

export default class PlantsRepository {
  static async getPlants(): Promise<IPlant[]> {
    const query = `Select * FROM ${DB_DATABASE}.Plants`;

    const result = await Connection.execute(query, []);
    const [plantsRows] = result as RowDataPacket[][];
    const plants = plantsRows as IPlant[];

    const plantsWithSpecialCare = await PlantsRepository.unitePlantsWithSpecialCare(plants);

    return plantsWithSpecialCare;
  }

  public static async getPlantById(id: string): Promise<IPlant | null> {
    const query = `Select * FROM ${DB_DATABASE}.Plants WHERE id = ?`;

    const result = await Connection.execute(query, [id]);
    const [plantsRows] = result as RowDataPacket[][];
    const [plant] = plantsRows as IPlant[];

    if (!plant) return null;

    const plantWithSpecialCare = await PlantsRepository.unitePlantsWithSpecialCare([plant]);

    return plantWithSpecialCare[0];
  }

  public static async removePlantById(id: string): Promise<void> {
    await PlantsRepository.removeSpecialCareByPlantId(id);

    const query = `DELETE FROM ${DB_DATABASE}.Plants WHERE id = ?`;
    await Connection.execute(query, [id]);
  }

  public static async editPlant(id: string, newPlant: IPlant): Promise<IPlant> {
    const { breed, size, needsSun, origin } = newPlant;
    const query = `
      UPDATE ${DB_DATABASE}.Plants
      SET breed = ?, size=?, needsSun = ?, origin = ?
      WHERE id = ?
    `;

    const specialCare = await PlantsRepository.editSpecialCareByPlantId(id, newPlant);

    await Connection.execute(query, [breed, size, needsSun, origin, id]);

    return { ...newPlant, id, specialCare };
  }

  public static async savePlant(plant: IPlant): Promise<IPlant> {
    const { id, breed, needsSun, origin, size } = plant;
    const query = `
      INSERT INTO ${DB_DATABASE}.Plants (id, breed, needsSun, origin, size)
      VALUES (?, ?, ?, ?, ?)
    `;
    await Connection.execute(query, [id, breed, needsSun, origin, size]);

    const waterFrequency = await PlantsRepository.saveSpecialCare(plant);

    return { ...plant, specialCare: waterFrequency };
  }

  private static async getSpecialCare(plant: IPlant): Promise<IPlant> {
    const query = `Select * FROM ${DB_DATABASE}.SpecialCare WHERE plantId = ?`;

    const result = await Connection.execute(query, [plant.id]);
    const [plantRow] = result as RowDataPacket[][];
    const [specialCare] = plantRow as ISpecialCare[];

    return { ...plant, specialCare };
  }

  private static async unitePlantsWithSpecialCare(plants: IPlant[]): Promise<IPlant[]> {
    const result = await Promise.all(
      plants.map((plant) => PlantsRepository.getSpecialCare(plant)),
    );

    return result;
  }

  private static async removeSpecialCareByPlantId(id: string): Promise<void> {
    const query = `DELETE FROM ${DB_DATABASE}.SpecialCare WHERE plantId = ?`;
    await Connection.execute(query, [id]);
  }

  private static async editSpecialCareByPlantId(
    id: string,
    newPlant: IPlant,
  ): Promise<ISpecialCare> {
    const waterFrequency = PlantsRepository.calculateWaterFrequency(newPlant);
    const query = `
      UPDATE ${DB_DATABASE}.SpecialCare
      SET waterFrequency = ?
      WHERE plantId = ?
    `;

    await Connection.execute(query, [waterFrequency, id]);

    return { waterFrequency };
  }

  private static calculateWaterFrequency(plant: IPlant): number {
    const { size, needsSun, origin } = plant;

    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
    
    return waterFrequency; 
  }

  private static async saveSpecialCare(plant: IPlant): Promise<ISpecialCare> {
    const waterFrequency = PlantsRepository.calculateWaterFrequency(plant);

    const query = `
      INSERT INTO ${DB_DATABASE}.SpecialCare (plantId, waterFrequency)
      VALUES (?, ?)
    `;
    await Connection.execute(query, [plant.id, waterFrequency]);

    return { waterFrequency };
  }
}