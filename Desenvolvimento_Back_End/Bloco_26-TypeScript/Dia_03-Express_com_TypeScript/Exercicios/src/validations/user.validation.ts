import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import generateError from '../helpers/generateError';
import IUser from '../interfaces/User';

export default (user: IUser) => {
  const { nome, email, senha } = user;
  
  const { error } = Joi.object({
    nome: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    senha: Joi.string().min(6).max(12).required(),
  }).validate({ nome, email, senha });

  if (error) throw generateError(StatusCodes.BAD_REQUEST, error.message);
}