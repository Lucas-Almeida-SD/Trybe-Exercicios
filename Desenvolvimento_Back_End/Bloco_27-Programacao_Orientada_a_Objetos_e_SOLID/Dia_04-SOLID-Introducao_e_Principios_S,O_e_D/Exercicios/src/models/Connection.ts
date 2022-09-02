import mysql, { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';

import 'dotenv/config';

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env;

class Connection {
  private static connection(): Pool {
    return mysql.createPool({
      user: DB_USER,
      password: DB_PASSWORD,
      host: DB_HOST,
      database: DB_DATABASE,
    });
  }

  public static async execute(
    query: string,
    values: Array<string | number | boolean>,
  ): Promise<RowDataPacket | ResultSetHeader> {
    const result = await Connection.connection().execute(query, values);
    return result as RowDataPacket | ResultSetHeader;
  }
}

export default Connection;