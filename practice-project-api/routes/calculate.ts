import { Router } from "express";

export const calculateRoute = Router();

calculateRoute.get("/", (req, res, next) => {
  res.send("this is the /calculate route");
});
