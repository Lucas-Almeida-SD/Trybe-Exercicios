import UserService from '../services/user.service';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.service.getAll();

    res.status(StatusCodes.OK).json(users);
  }

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const user = await this.service.getById(id);

    res.status(StatusCodes.OK).json(user);
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.service.create(user);

    res.status(StatusCodes.CREATED).json(userCreated);
  }
}