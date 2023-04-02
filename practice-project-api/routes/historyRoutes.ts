import * as historyController from '../controllers/historyController';
import { Router, Request, Response } from "express";

export const historyRoute = Router();

historyRoute.get("/history", async (req: Request, res: Response, next) => {

    let history = await historyController.history(req);

    res.send(history);
    
});
