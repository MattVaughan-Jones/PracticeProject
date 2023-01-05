import { Router, Request, Response } from "express";

export const calculateRoute = Router();

calculateRoute.get("/calculate", (req: Request, res: Response, next) => {
  res.send("this is the /calculate route");
});

calculateRoute.post("/calculate", (req: Request, res: Response, next) => {
  type calculatorOperation = '*' | '/' | '+' | '-';

  interface Calculate {
    firstNumber: number,
    secondNumber: number,
    operation: calculatorOperation,
  };

  const input: Calculate = {
    firstNumber: req.body.firstNumber,
    secondNumber: req.body.firstNumber,
    operation: req.body.operation,
  };

  let calculate = (firstNumber: number, operation: calculatorOperation, secondNumber: number): number => {
    switch (operation) {
      case '*': return firstNumber * secondNumber;
      case '/': return firstNumber / secondNumber;
      case '+': return firstNumber + secondNumber;
      case '-': return firstNumber - secondNumber;
    }
  };

  const output: Number = calculate(input.firstNumber, input.operation, input.secondNumber);
  console.log(output);
  res.end(JSON.stringify(output));

});
