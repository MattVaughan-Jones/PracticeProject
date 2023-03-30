import { Calculation } from '../models/calculatorModel';
import { CalculatorOperation } from '../types';

// get records of previous calculations
export const history = async function(req: any) {

    let history: Calculation[];

    if (Object.values(CalculatorOperation).includes(req.query.filter.operation)) {

        console.log()

        history = await Calculation.findAll({
            limit: 10,
            where: {
                operation: req.query.filter.operation
            },
            order: [ [ 'createdAt', 'DESC' ]]
        });

    } else {

        history = await Calculation.findAll({
            limit: 10,
            order: [ [ 'createdAt', 'DESC' ]]
        });

    }

    

    return history;
}
