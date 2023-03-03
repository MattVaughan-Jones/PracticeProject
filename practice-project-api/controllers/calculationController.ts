import { Calculation } from '../models/calculatorModel';

// Create and Save a new Tutorial
export const create = async (firstValue: number, secondValue: number, operation: string, output: number) => {
    const calculation = Calculation.build({ 
        first_value: firstValue,
        second_value: secondValue,
        operation: operation,
        result: output
    });
    await calculation.save();
};
