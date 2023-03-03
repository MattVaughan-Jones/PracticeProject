import { sequelize } from "./index";
import { Sequelize, DataTypes, Model } from 'sequelize'

export class Calculation extends Model {
  declare firstNumber: number;
  declare secondNumber: number;
  declare operation: CalculatorOperation;
  declare result: number;
}

Calculation.init({
  // Model attributes are defined here
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
  sequelize, // We need to pass the connection instance
  modelName: 'Calculation' // We need to choose the model name
});

async function synchronise() {
  await Calculation.sync({ alter: true })
};

synchronise();

// the defined model is the class itself
console.log(Calculation === sequelize.models.User); // true
 