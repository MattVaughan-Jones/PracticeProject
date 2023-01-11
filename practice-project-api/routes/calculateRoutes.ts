import { Router, Request, Response } from "express";

export const calculateRoute = Router();

enum CalculatorOperation {
  Multiply = '*',
  Divide = '/',
  Add = '+',
  Subtract = '-'
}

calculateRoute.post("/calculate", (req: Request, res: Response, next) => {

  const firstValue = req.body.firstValue;
  const secondValue = req.body.secondValue;
  const operation = req.body.operation;

  let output;

  switch (operation) {
    case CalculatorOperation.Multiply: {
      output = { result: firstValue * secondValue }
      break;
    }
    case CalculatorOperation.Divide: {
      output = { result: firstValue / secondValue }
      break;
    }
    case CalculatorOperation.Add: {
      output = { result: firstValue + secondValue }
      break;
    }
    case CalculatorOperation.Subtract: {
      output = { result: firstValue - secondValue }
      break;
    }
  }

  res.send(output);

});
