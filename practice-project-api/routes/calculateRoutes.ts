import { body, validationResult } from 'express-validator';
import { Router, Request, Response } from "express";

export const calculateRoute = Router();

enum CalculatorOperation {
  Multiply = '*',
  Divide = '/',
  Add = '+',
  Subtract = '-'
}

calculateRoute.post(
  "/calculate",
  body('inputs.firstValue', 'please enter a number').not().isEmpty().matches(/^-?\d*\.?\d+$/),
  body('inputs.secondValue', 'please enter a number').not().isEmpty().matches(/^-?\d*\.?\d+$/),
  body('operation', 'please select one of the operations from the dropdown').not().isEmpty().isIn(['+', '-', '*', '/']),
  (req: Request, res: Response, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

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

  }
);

//About to start back-end validation
