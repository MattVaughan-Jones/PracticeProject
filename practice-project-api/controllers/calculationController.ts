import { Calculation } from '../models/calculatorModel';
import { CalculatorOperation } from '../types';

// Create and Save a new Calculation
const create = async (firstValue: number, secondValue: number, operation: CalculatorOperation, output: number) => {

    const calculation = Calculation.build({ 
        first_value: firstValue,
        second_value: secondValue,
        operation: operation,
        result: output
    });
    
    await calculation.save();
};

export const calculate = function(firstValue: number, secondValue: number, operation: CalculatorOperation) {

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

    create(firstValue, secondValue, operation, output);

    return output;

}
