import { Router, Request, Response } from "express";

export const calculateRoute = Router();

calculateRoute.get("/calculate", (req: Request, res: Response, next) => {
  res.send("this is the /calculate route");
});