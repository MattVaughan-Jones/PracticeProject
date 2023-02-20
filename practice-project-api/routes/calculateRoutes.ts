import { Router, Request, Response } from "express";

export const calculateRoute = Router();

enum CalculatorOperation {
  Multiply = '*',
  Divide = '/',
  Add = '+',
  Subtract = '-'
}

calculateRoute.post("/calculate", (req: Request, res: Response, next) => {

  const firstValue = req.body.inputs.firstValue;
  const secondValue = req.body.inputs.secondValue;
  const operation = req.body.operation;

  let output;

  switch (operation) {
    case CalculatorOperation.Multiply: {
      output = firstValue * secondValue
      break;
    }
    case CalculatorOperation.Divide: {
      output = firstValue / secondValue
      break;
    }
    case CalculatorOperation.Add: {
      output = firstValue + secondValue
      break;
    }
    case CalculatorOperation.Subtract: {
      output = firstValue - secondValue
      break;
    }
  }

  res.send({result: output});

});

//About to start back-end validation
