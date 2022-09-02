import { IPlant } from '../interfaces/plant.interface';
import PlantsRepository from '../models/repositories/PlantsRepository';
import PlantsValidate from '../validations/PlantsValidate';

export default class PlantsService {
  public static async getPlants(): Promise<IPlant[]> {
    const plants = await PlantsRepository.getPlants();

    return plants;
  }

  public static async getPlantById(id: string): Promise<IPlant> {
    const plant = await PlantsValidate.plantExists(id);

    return plant as IPlant;
  }

  public static async removePlantById(id: string): Promise<void> {
    await PlantsValidate.plantExists(id);

    await PlantsRepository.removePlantById(id);
  }

  public static async getPlantsThatNeedsSunWithId(id: string): Promise<IPlant> {
    const plant = await PlantsService.getPlantById(id);

    PlantsValidate.checkPlantsThatNeedsSunWithId(plant);

    return plant as IPlant;
  }

  public static async editPlant(id: string, newPlant: IPlant): Promise<IPlant> {
    PlantsValidate.checkPlantProperties({ ...newPlant, id });
    await PlantsValidate.plantExists(id);

    const editedPlant = await PlantsRepository.editPlant(id, newPlant);

    return editedPlant;
  }

  public static async savePlant(plant: IPlant): Promise<IPlant> {
    PlantsValidate.checkPlantProperties(plant);
    await PlantsValidate.plantAlreadyExists(plant.id);

    const createdPlant = await PlantsRepository.savePlant(plant);
    
    return createdPlant;
  }
}