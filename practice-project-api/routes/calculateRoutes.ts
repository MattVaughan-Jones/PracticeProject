import { Router, Request, Response } from "express";
import { calculatorOperation } from "../types";

export const calculateRoute = Router();

calculateRoute.get("/calculate", (req: Request, res: Response, next) => {
  res.send("this is the /calculate route");
});

calculateRoute.post("/calculate", (req: Request, res: Response, next) => {

  interface Calculate {
    firstNumber: number,
    secondNumber: number,
    operation: calculatorOperation,
  };

  interface Output {
    output: Number
  };

  const input: Calculate = {
    firstNumber: req.firstNumber,
    secondNumber: req.firstNumber,
    operation: req.operation,
  };

  const output = (input.firstNumber, input.operation, input.secondNumber) => {
    //calclator code here
    return 0;
  };

  res.send(output);

});
