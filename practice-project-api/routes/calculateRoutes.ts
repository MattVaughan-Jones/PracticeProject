import { Router, Request, Response } from "express";

export const calculateRoute = Router();

enum calculatorOperation {
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
    case calculatorOperation.Multiply: {
      output = { result: firstValue * secondValue }
      break;
    }
    case calculatorOperation.Divide: {
      output = { result: firstValue / secondValue }
      break;
    }
    case calculatorOperation.Add: {
      output = { result: (+firstValue) + (+secondValue) }
      break;
    }
    case calculatorOperation.Subtract: {
      output = { result: firstValue - secondValue }
      break;
    }
  }

  res.send(JSON.stringify(output));

});
