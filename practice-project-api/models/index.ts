import { Sequelize, Dialect } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const host = process.env.HOST;
const dialect = (process.env.DB_DIALECT as unknown as Dialect);
const port = (process.env.DB_PORT as unknown as number);
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME ?? 'blank';
const dbUser = process.env.DB_USER ?? 'blank';

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: host,
  dialect: dialect,
  port: port,
});
