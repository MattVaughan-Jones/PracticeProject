import { Router } from 'express';
import { calculateRoute } from './calculateRoutes';

export const routes = Router();

routes.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routes.use(calculateRoute);
