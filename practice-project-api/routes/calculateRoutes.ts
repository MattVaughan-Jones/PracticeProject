import * as calculationController from '../controllers/calculationController';
import { body, validationResult } from 'express-validator';
import { Router, Request, Response } from "express";
import { CalculatorOperation } from '../types';

export const calculateRoute = Router();

calculateRoute.post(
  "/calculate",
  body('values.firstValue', 'please enter a first number').not().isEmpty().matches(/^-?\d*\.?\d+$/),
  body('values.secondValue', 'please enter a second number').not().isEmpty().matches(/^-?\d*\.?\d+$/),
  body('operation', 'please select one of the operations from the dropdown').not().isEmpty()
    .isIn(Object.values(CalculatorOperation)),
  (req: Request, res: Response, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const firstValue = req.body.values.firstValue;
    const secondValue = req.body.values.secondValue;
    const operation = req.body.operation;

    const output = calculationController.calculate(firstValue, secondValue, operation);
    
    res.send({
      result: output,
    });

  }
);
