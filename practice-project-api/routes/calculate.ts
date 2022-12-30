import { Router } from "express";

export const calculateRoute = Router();

calculateRoute.get("/calculate", (req, res, next) => {
  res.send("this is the /calculate route");
});
