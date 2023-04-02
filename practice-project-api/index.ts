import express, { Express, Request, Response } from 'express';
import { routes } from './routes';
import { sequelize } from './models/index';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use("/", routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  sequelize.authenticate().then(async() => {
  })
  .catch((e: any) => {
    console.log(e.message);
  })
});

/*******************************
*
* USEFUL SCRIPTS
*
* if port already in use: lsof -ti tcp:8000 | xargs kill
* or: lsof -i tcp:8000 | awk 'NR!=1 {print $2}' | xargs kill
*******************************/
