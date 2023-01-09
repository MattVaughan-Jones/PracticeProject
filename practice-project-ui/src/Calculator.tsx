import * as React from "react";
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env.BASE_URL;

function App() {

  const [data, setData] = React.useState(null);

  enum Operations {
    Add = "+",
    Subtract = "-",
    Multiply = "*",
    Divide = "/"
  };

  async function calculate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      axios.post(`${baseURL}/calculate`, {
        firstValue: (event.target as HTMLFormElement).firstValue.value,
        operation: (event.target as HTMLFormElement).operation.value,
        secondValue: (event.target as HTMLFormElement).secondValue.value
      })
      .then((response) => {
        setData(response.data);
      });
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div>
      <header>
        <p>Calculator Component</p>
        <p>Result: {data}</p>
      </header>
        <form onSubmit={calculate}>
          <label>first Number : <input name="firstValue" type="number" /></label>
          <label>Operation : 
            <select name="operation">
              <option value={ Operations.Multiply }>Multiply</option>
              <option value={ Operations.Divide }>divide</option>
              <option value={ Operations.Add }>Add</option>
              <option value={ Operations.Subtract }>subtract</option>
            </select>
          </label>
          <label>second Number : <input name="secondValue" type="number" /></label>
          <button type="submit">Submit</button>
        </form>
    </div>
  );

}

export default App;

