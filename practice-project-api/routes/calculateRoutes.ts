import { Router, Request, Response } from "express";

export const calculateRoute = Router();

calculateRoute.post("/calculate", (req: Request, res: Response, next) => {
  type calculatorOperation = '*' | '/' | '+' | '-';

  interface Calculate {
    firstNumber: number,
    secondNumber: number,
    operation: calculatorOperation,
  };

  const input: Calculate = {
    firstNumber: req.body.firstNumber,
    secondNumber: req.body.secondNumber,
    operation: req.body.operation,
  };

  let calculate = (firstNumber: number, operation: calculatorOperation, secondNumber: number): number => {
    switch (operation) {
      case '*': return firstNumber * secondNumber;
      case '/': return firstNumber / secondNumber;
      case '+': return (+firstNumber) + (+secondNumber);
      case '-': return firstNumber - secondNumber;
    }
  };

  const output: Number = calculate(input.firstNumber, input.operation, input.secondNumber);

  res.end(JSON.stringify(output));

});
