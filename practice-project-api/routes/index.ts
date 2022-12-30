import {Router} from 'express';
import { calculateRoute } from './calculate';

export const routes = Router();

routes.use(calculateRoute);
