import { Router, Request, Response } from 'express';
import { calculateRoute } from './calculateRoutes';

export const routes = Router();

routes.use(calculateRoute);
