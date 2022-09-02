import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';
import PlantsRepository from '../models/repositories/PlantsRepository';
import { IPlant, ISpecialCare } from '../interfaces/plant.interface';

enum Errors {
  plantNotFound = 'Plant not found',
  plantAlreadyExists= 'Plant already exists'
}

export default class PlantsValidate {
  public static async plantExists(id:string): Promise<IPlant> {
    const plant = await PlantsRepository.getPlantById(id);
    
    if (!plant) {
      PlantsValidate.throwMyError(StatusCodes.NOT_FOUND, Errors.plantNotFound);
    }

    return plant as IPlant;
  }

  public static specialCareExists(specialCare: ISpecialCare): boolean {
    const values = Object.values(specialCare);

    return !(values.every((value) => value === null));
  }

  public static waterFrequencyGreaterThan2(specialCare: ISpecialCare): boolean {
    return specialCare.waterFrequency > 2;
  }

  public static checkPlantsThatNeedsSunWithId(plant: IPlant): void {
    const specialCare = plant.specialCare as ISpecialCare;
    const specialCareExists = PlantsValidate.specialCareExists(specialCare);
    const waterFrequencyGreaterThan2 = PlantsValidate.waterFrequencyGreaterThan2(specialCare);

    if (specialCareExists && !waterFrequencyGreaterThan2) {
      PlantsValidate.throwMyError(StatusCodes.NOT_FOUND, Errors.plantNotFound);
    }
  }

  public static checkPlantProperties(plant: IPlant): void {
    const { id, breed, size, needsSun, origin } = plant;
    const { error } = Joi.object({
      id: Joi.string().min(10).required(),
      breed: Joi.string().min(3).required(),
      size: Joi.number().min(1).required(),
      needsSun: Joi.boolean().required(),
      origin: Joi.string().min(3).required(),
    }).validate({ id, breed, size, needsSun, origin });

    if (error) PlantsValidate.throwMyError(StatusCodes.BAD_REQUEST, error.message);
  }

  public static async plantAlreadyExists(id: string): Promise<void> {
    const plant = await PlantsRepository.getPlantById(id);
    
    if (plant) {
      PlantsValidate.throwMyError(StatusCodes.CONFLICT, Errors.plantAlreadyExists);
    }
  }

  public static throwMyError(code: number, message: string): void {
    const errorObject = { code, message };
    const myError = new Error(JSON.stringify(errorObject));
    myError.name = 'errorObject';

    throw myError;
  }
}