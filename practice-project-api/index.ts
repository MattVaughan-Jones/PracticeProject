//requires
import * as express from 'express';
import {routes} from './routes';

const PORT = process.env.PORT || 3001;
const app = express();

//use the /calculate.ts file to handle endpoints starting with /calculate
app.use("/", routes);

app.get("/", (req, res) => {
  res.send("<h1>first middleware: Hello world!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
