import { Sequelize, Dialect } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const host = (process.env.HOST as unknown as string);
const dialect = (process.env.DB_DIALECT as unknown as Dialect);
const port = (process.env.DB_PORT as unknown as number);
const max = (process.env.DB_POOL_MAX as unknown as number);
const min = (process.env.DB_POOL_MIN as unknown as number);
const acquire = (process.env.DB_POOL_ACQUIRE as unknown as number);
const idle = (process.env.DB_POOL_IDLE as unknown as number);

const dbName = process.env.DB_NAME ?? 'blank';
const dbUser = process.env.DB_NAME ?? 'blank';

export const sequelize = new Sequelize(dbName, dbUser, process.env.DB_PASSWORD, {
  host: host,
  dialect: dialect,
  port: port,
  pool: {
    max: max,
    min: min,
    acquire: acquire,
    idle: idle
  }
});
