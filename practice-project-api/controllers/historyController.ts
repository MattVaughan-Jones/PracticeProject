import { Calculation } from '../models/calculatorModel';

// get records of previous calculations
export const history = function() {
    return Calculation.findAll();
}
