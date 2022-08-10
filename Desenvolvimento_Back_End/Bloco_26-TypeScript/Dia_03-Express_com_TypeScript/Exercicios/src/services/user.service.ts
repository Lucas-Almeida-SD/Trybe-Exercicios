import UserModel from '../models/user.model';
import IUser from '../interfaces/User';
import generateError from '../helpers/generateError';
import { StatusCodes } from 'http-status-codes';
import userValidation from '../validations/user.validation';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async getAll(): Promise<IUser[]> {
    const users = await this.model.getAll();

    return users;
  }

  public async getById(id: number): Promise<IUser> {
    const user = await this.model.getById(id);

    if (!user) throw generateError(StatusCodes.NOT_FOUND, 'User not found!');

    return user;
  }

  public async create(user: IUser): Promise<IUser> {
    userValidation(user);

    const userCreated = await this.model.create(user);

    return userCreated;
  }
}