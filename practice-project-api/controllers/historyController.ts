import { Calculation } from '../models/calculatorModel';

// get records of previous calculations
export const history = async function() {
    let history: Calculation[] = await Calculation.findAll();

    return history
}
