import * as historyController from '../controllers/historyController';
import * as calculatorModel from '../models/calculatorModel';
import { body, validationResult } from 'express-validator';
import { Router, Request, Response } from "express";
import { CalculatorOperation } from '../types';

export const historyRoute = Router();

historyRoute.get("/history", async (req: Request, res: Response, next) => {

    let history = await historyController.history(req);

    res.send(history);
    
});
