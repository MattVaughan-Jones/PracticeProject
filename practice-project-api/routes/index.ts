import { Router } from 'express';
import { calculateRoute } from './calculateRoutes';
import {historyRoute } from './historyRoutes';
import * as bodyParser from 'body-parser';

export const routes = Router();

//middleware
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routes.use(calculateRoute, historyRoute);
