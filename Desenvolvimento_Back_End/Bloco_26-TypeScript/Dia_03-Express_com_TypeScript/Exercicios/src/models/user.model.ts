import { Pool, ResultSetHeader } from "mysql2/promise";
import connectionDB from '../utils/connection';
import IUser from '../interfaces/User';

export default class UserModel {
  public connection: Pool;

  constructor() {
    this.connection = connectionDB;
  };

  public async getAll(): Promise<IUser[]> {
    const query = 'SELECT * FROM Users'
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as IUser[];
  }

  public async getById(id: number) : Promise<IUser | undefined> {
    const query = 'SELECT * FROM Users WHERE id = ?';
    const result = await this.connection.execute(query, [id]);

    const [rows] = result;
    const [user] = rows as IUser[];

    return user;
  }

  public async create(user: IUser) : Promise<IUser> {
    const { nome, email, senha } = user;
    const query = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)'

    const result = await this.connection.execute<ResultSetHeader>(query, [nome, email, senha]);
    const [data] = result;
    const { insertId } = data;

    return { id: insertId, ...user };
  }
}
