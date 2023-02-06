import * as React from "react";
import axios from 'axios';


const baseURL = process.env.REACT_APP_BASE_URL;

enum Operations {
  Add = "+",
  Subtract = "-",
  Multiply = "*",
  Divide = "/"
};

function App() {

  const [data, setData] = React.useState(null);

  async function calculate(event: React.FormEvent<HTMLFormElement>) {
    
    event.preventDefault();

    try {
      axios.post(`${baseURL}/calculate`, {
        firstValue: (event.target as HTMLFormElement).firstValue.value,
        operation: (event.target as HTMLFormElement).operation.value,
        secondValue: (event.target as HTMLFormElement).secondValue.value
      })
      .then((response) => {
        setData(response.data.result);
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
              <option value={ Operations.Multiply }>{ Operations.Multiply }</option>
              <option value={ Operations.Divide }>{ Operations.Divide }</option>
              <option value={ Operations.Add }>{ Operations.Add }</option>
              <option value={ Operations.Subtract }>{ Operations.Subtract }</option>
            </select>
          </label>
          <label>second Number : <input name="secondValue" type="number" /></label>
          <button type="submit">Submit</button>
        </form>
    </div>
  );

}

export default App;
