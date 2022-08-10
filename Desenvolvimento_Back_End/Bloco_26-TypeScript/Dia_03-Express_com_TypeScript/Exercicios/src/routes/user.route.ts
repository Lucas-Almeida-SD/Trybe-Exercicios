import { Router } from "express";
import UserController from "../controllers/user.controller";
import 'express-async-errors';


const userRouter = Router();

const userController = new UserController();

userRouter.get('/', userController.getAll);
userRouter.get('/:id', userController.getById);
userRouter.post('/', userController.create);

export default userRouter;
