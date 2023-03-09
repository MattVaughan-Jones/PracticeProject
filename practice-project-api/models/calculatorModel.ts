import { sequelize } from "./index";
import { DataTypes, Model } from 'sequelize'

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

// the defined model is the class itself
console.log(Calculation === sequelize.models.User); // true
 