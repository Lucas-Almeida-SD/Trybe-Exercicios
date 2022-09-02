import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import PlantsService from '../services/PlantsService';

export default class PlantsController {
  public static async getPlants(_req: Request, res: Response) : Promise<void> {
    const plants = await PlantsService.getPlants();

    res.status(StatusCodes.OK).json(plants);
  }

  public static async getPlantById(req: Request, res: Response) : Promise<void> {
    const { id } = req.params;

    const plant = await PlantsService.getPlantById(id);

    res.status(StatusCodes.OK).json(plant);
  }

  public static async removePlantById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    await PlantsService.removePlantById(id);

    res.status(StatusCodes.NO_CONTENT).end();
  }

  public static async getPlantsThatNeedsSunWithId(req: Request, res: Response) : Promise<void> {
    const { id } = req.params;

    const plant = await PlantsService.getPlantsThatNeedsSunWithId(id);

    res.status(StatusCodes.OK).json(plant);
  }

  public static async editPlant(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const newPlant = req.body;

    const editedPlant = await PlantsService.editPlant(id, newPlant);

    res.status(StatusCodes.OK).json(editedPlant);
  }

  public static async savePlant(req: Request, res: Response) : Promise<void> {
    const plant = req.body;

    const createdPlant = await PlantsService.savePlant(plant);

    res.status(StatusCodes.CREATED).json(createdPlant);
  }
}