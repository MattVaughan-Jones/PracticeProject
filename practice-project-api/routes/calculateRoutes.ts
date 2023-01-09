import { Router, Request, Response } from "express";

export const calculateRoute = Router();

calculateRoute.post("/calculate", (req: Request, res: Response, next) => {

  enum calculatorOperation {
    Multiply = '*',
    Divide = '/',
    Add = '+',
    Subtract = '-'
  }

  interface Calculate {
    firstValue: number,
    secondValue: number,
    operation: calculatorOperation,
  };

  const input: Calculate = {
    firstValue: req.body.firstValue,
    secondValue: req.body.secondValue,
    operation: req.body.operation,
  };

  let calculate = (firstValue: number, operation: calculatorOperation, secondValue: number): number => {
    switch (operation) {
      case calculatorOperation.Multiply: return firstValue * secondValue;
      case calculatorOperation.Divide: return firstValue / secondValue;
      case calculatorOperation.Add: return (+firstValue) + (+secondValue);
      case calculatorOperation.Subtract: return firstValue - secondValue;
    }
  };

  const output: Number = calculate(input.firstValue, input.operation, input.secondValue);

  res.end(JSON.stringify(output));

});
