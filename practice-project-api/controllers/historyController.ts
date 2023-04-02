import { Calculation } from '../models/calculatorModel';
import { CalculatorOperation } from '../types';
import dotenv from 'dotenv';

dotenv.config();

let limit: number = +process.env.HISTORY_LENGTH;

// get records of previous calculations
export const history = async function(req: any) {

    let history: Calculation[];

    if (Object.values(CalculatorOperation).includes(req.query.filter)) {

        history = await Calculation.findAll({
            limit: limit,
            where: {
                operation: req.query.filter
            },
            order: [ [ 'createdAt', 'DESC' ]]
        });

    } else {

        history = await Calculation.findAll({
            limit: limit,
            order: [ [ 'createdAt', 'DESC' ]]
        });

    }

    

    return history;
}
