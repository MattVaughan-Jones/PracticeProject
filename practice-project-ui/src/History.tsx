import { Container, Box, Button, Grid, FormControl, MenuItem, TextField } from '@mui/material';
import { Operation, CalculationEntry } from './types';
import React, { useState } from 'react';
import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

function History() {

  const [historyList, setHistoryList] = useState([null]);

  function getHistory(){

    axios.get(`${baseURL}/history`)
      //pass operation as `params` when implementing filtering
    .then((response) => {
      setHistoryList(response.data.map(
        (historyItem: CalculationEntry) => {

          return historyItem.first_value + ' ' + historyItem.operation + ' ' + historyItem.second_value + ' ' + '= ' + historyItem.result;

        }
      ));

    })
    .catch((error) => {
      console.log(error);
    })

  }

  let historyListIndex: number = null;

  return (
    <>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
      </head>
      <Container sx={{mt: 10}}>
        <header>
          <h3>History</h3>
        </header>
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
        </Grid>
        <Box
          sx={{
            my: 3,
            width: '469px',
            bgcolor: 'grey.100',
            color: 'grey.800',
            border: '1px solid',
            borderRadius: 2,
            fontWeight: '700',
            textAlign: 'center',
          }}
        >
          {historyList.map((item: string) => {
            historyListIndex === null ? historyListIndex=0 : historyListIndex++;
            return <p key={'History' + historyListIndex}>{item}</p>
          })}
        </Box>
        <Button sx={{fontSize: 15}} variant="outlined" onClick={getHistory}>manual history refresh</Button>
      </Container>
    </>
  )
}

export default History;

