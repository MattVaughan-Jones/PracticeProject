import { FormControl, TextField, Container, MenuItem, Button, Grid, Box } from '@mui/material';
import React, { useState } from 'react';
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

type Valid = {
  firstValue: boolean,
  secondValue: boolean
}

type Calculation = {
  operation: Operation,
  inputs: Inputs
}

function Calculator() {

  const [result, setResult] = useState(null);
  const [inputs, setInputs] = useState<Inputs>({firstValue: 0, secondValue: 0});
  const [valid, setValid] = useState<Valid>({firstValue: true, secondValue: true});
  const [errors, setErrors] = useState(null);

  async function calculate(event: any) {
    
    event.preventDefault();

    const calculation: Calculation = {inputs: inputs, operation: event.target.operation.value};

    axios.post(`${baseURL}/calculate`,
      calculation
    )
    .then((response) => {
      if (response) {
        console.log('remove errors');
        setErrors(null);
      }
      setResult(response.data.result);
    })
    .catch((error) => {
      if (error.response) {
        switch(error.response.status) {
          case 400:
            setErrors(error.response.data.errors[0].msg);
            console.log(error.response.data.errors[0].msg);
          break;
        }
      }
    });
    
  }

  const handleValidation = (event: any) => {
    
    const name = event.target.name;

    //validates value against regex: any real number
    const validator = /^-?\d*\.?\d+$/.test(event.target.value);
    
    setValid(values => ({...values, [name]: validator}));
  }
  
  const handleChange = (event: any) => {
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
        <Box
          sx={{
            my: 3,
            width: '469px',
            bgcolor: 'grey.100',
            color: 'grey.800',
            border: '1px solid',
            borderRadius: 2,
            fontSize: '2rem',
            fontWeight: '700',
            textAlign: 'center',
          }}
        >
          <p>{result}</p>
        </Box>
        <form onSubmit={calculate}>
          <Grid 
            container
            direction={{ xs: 'column', sm: 'row' }}
            rowSpacing={{xs: 1, sm: 0}}
            justifyContent={{xs:'center', sm:'flex-start'}}
            alignItems='center'
          >
            <Grid item pr={'15px'}>
              <FormControl>
                <TextField
                  required
                  error={!valid.firstValue}
                  label="first number" 
                  type="number" 
                  name="firstValue" 
                  value={inputs.firstValue}
                  onChange={handleChange}
                  onBlur={handleValidation}
                  style={{ width: 120}}
                />
              </FormControl>
            </Grid>
            <Grid item pr={'15px'}>
              <FormControl>
                <TextField
                  required
                  select
                  label="Operation"
                  name="operation"
                  defaultValue={Operation.Add}
                  style={{ width: 120}}
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
              </FormControl>
            </Grid>
            <Grid item pr={'15px'}>
              <FormControl>
                <TextField 
                  required
                  error={!valid.secondValue}
                  label="second number" 
                  type="number" 
                  name="secondValue" 
                  value={inputs.secondValue} 
                  onChange={handleChange}
                  onBlur={handleValidation}
                  style={{ width: 120}}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <Button sx={{fontSize: 25}} variant="outlined" type="submit">=</Button>
              </FormControl>
            </Grid>
          </Grid>
        </form>
        
          {errors &&
            <Box
              sx={{
                my: 3,
                width: '469px',
                color: 'red',
                border: '1px solid',
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <p>Error</p>
              <p>{ errors }</p>
            </Box>
          }
        
      </Container>
    </>
  )
}

export default Calculator;

