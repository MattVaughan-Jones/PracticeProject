import { Container, Box, Grid, FormControl, MenuItem, TextField } from '@mui/material';
import { Operation, CalculationEntry } from './types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

function History() {

  const [historyList, setHistoryList] = useState([null]);
  const [operationFilter, setOperationFilter] = useState('all');

  //Every time the operationFilter state changes, retreive the history again from the server
  // eslint-disable-next-line
  useEffect(() => {getHistory()},[operationFilter]);

  function getHistory() {
    axios.get(`${baseURL}/history`, {
      params: {
        filter: operationFilter
      }
    })
    .then((response) => {
      setHistoryList(response.data.map(
        (historyItem: CalculationEntry) => {

          return historyItem.first_value + ' ' + historyItem.operation + ' ' + historyItem.second_value + ' = ' + historyItem.result;

        }
      ));

    })
    .catch((error) => {
      console.log(error);
    })
  }

  //resets index used in to provide a key to each item rendered in the history list
  //https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
  let historyListIndex: number = null;

  return (
    <>
      <Container sx={{mt: 10}}>
        <header>
          <small>10 most recent calculations</small>
        </header>
        <form onSubmit={null}>
          <Grid 
              container
              direction={{ xs: 'column', sm: 'row' }}
              rowSpacing={{xs: 1, sm: 0}}
              justifyContent={{xs:'center', sm:'flex-start'}}
              alignItems='center'
              sx={{pt: 3}}
            >
            <Grid item pr={'15px'}>
              <FormControl>
                <TextField
                  id='operationFilterDropdown'
                  required
                  select
                  label="Filter"
                  name="operationFilter"
                  style={{ width: 120}}
                  value={operationFilter}
                  onChange={e => setOperationFilter(e.target.value)}
                >
                  <MenuItem key='all' value='all'>
                    all
                  </MenuItem>
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
        </form>
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
      </Container>
    </>
  )
}

export default History;

