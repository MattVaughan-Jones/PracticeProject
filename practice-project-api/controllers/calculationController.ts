import { Calculation } from '../models/calculatorModel';
import { CalculatorOperation } from '../types';

// Create and Save a new Calculation
export const create = async (firstValue: number, secondValue: number, operation: CalculatorOperation, output: number) => {
    const calculation = Calculation.build({ 
        first_value: firstValue,
        second_value: secondValue,
        operation: operation,
        result: output
    });
    await calculation.save();
};
