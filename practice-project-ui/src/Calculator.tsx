import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
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
          <h1>Calculator</h1>
        </header>
        <p>result: {result}</p>
        <form onSubmit={calculate}>
          <TextField label="first number" type="number" name="firstValue" value={inputs.firstValue} onInput={handleChange}/>
          <TextField
            select
            label="Operation"
            name="operation"
            defaultValue={Operation.Add}
          >
            <MenuItem key={Operation.Multiply} value={Operation.Multiply}>
              {Operation.Multiply}
            </MenuItem>
            <MenuItem key={Operation.Divide} value={Operation.Divide}>
              {Operation.Divide}
            </MenuItem>
            <MenuItem key={Operation.Add} value={Operation.Add}>
              {Operation.Add}
            </MenuItem>
            <MenuItem key={Operation.Subtract} value={Operation.Subtract}>
              {Operation.Subtract}
            </MenuItem>
          </TextField>
          <TextField label="second number" type="number" name="secondValue" value={inputs.secondValue} onInput={handleChange}/>
          <Button variant="outlined" type="submit">=</Button>
        </form>
      </Container>
    </>
  )
}

export default Calculator;
