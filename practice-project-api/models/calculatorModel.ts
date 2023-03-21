import { CalculatorOperation } from '../types';
import { DataTypes, Model } from 'sequelize'
import { sequelize } from "./index";

export class Calculation extends Model {
  declare firstNumber: number;
  declare secondNumber: number;
  declare operation: CalculatorOperation;
  declare result: number;
}

Calculation.init({
  first_value: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  second_value: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  operation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  result: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Calculation'
});

async () => {
  await Calculation.sync({ alter: true })
}
