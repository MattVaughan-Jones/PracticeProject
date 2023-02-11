import Container from '@mui/material/Container';
import { useState } from 'react';
import * as React from "react";
import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

enum Operation {
  Add = "+",
  Subtract = "-",
  Multiply = "*",
  Divide = "/"
};

type Inputs = {
  firstValue: number,
  secondValue: number
}

type Calculation = {
  operation: Operation,
  inputs: Inputs
}

function Calculator() {

  const [result, setResult] = React.useState(null);
  const [inputs, setInputs] = useState<Inputs>({firstValue: 0, secondValue: 0});

  async function calculate(event: any) {
    
    event.preventDefault();

    const calculation: Calculation = {inputs: inputs, operation: event.target.operation.value};

    try {
      axios.post(`${baseURL}/calculate`,
        calculation
      )
      .then((response) => {
        setResult(response.data.result);
      });
    } catch (error) {
      console.log(error.response);
    }
  }
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name;
      const value = +event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
  return (
    <>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
      </head>
      <Container>
        <header>
          <h1>Calculator Component</h1>
        </header>
      </Container>
      <Container>
        <p>result: {result}</p>
      </Container>
      <Container>
        <form onSubmit={calculate}>
          <label>First Value
            <input type="number" name="firstValue" value={inputs.firstValue} onInput={handleChange}/>
          </label>
          <label>Operation
            <select name="operation">
              <option value={ Operation.Multiply }>{ Operation.Multiply }</option>
              <option value={ Operation.Divide }>{ Operation.Divide }</option>
              <option value={ Operation.Add }>{ Operation.Add }</option>
              <option value={ Operation.Subtract }>{ Operation.Subtract }</option>
            </select>
          </label>
          <label>Second Value
            <input type="number" name="secondValue" value={inputs.secondValue} onInput={handleChange}/>
          </label>
          <button type="submit">Submit</button>
        </form>
      </Container>
    </>
  )
}

export default Calculator;
