import * as React from "react";
import axios from 'axios';

const baseURL = "http://localhost:8000";

function App() {

  const [data, setData] = React.useState(null);

  async function calculate(event: React.FormEvent<HTMLFormElement>) {
    console.log(event); 
    event.preventDefault();

    try {
      axios.post(`${baseURL}/calculate`, {
        firstNumber: (event.target as HTMLFormElement).firstNumber.value,
        operation: (event.target as HTMLFormElement).operation.value,
        secondNumber: (event.target as HTMLFormElement).secondNumber.value
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
          <label>first Number : <input name="firstNumber" type="number" /></label>
          <label>Operation : 
            <select name="operation">
              <option value="*">Multiply</option>
              <option value="/">divide</option>
              <option value="+">Add</option>
              <option value="-">subtract</option>
            </select>
          </label>
          <label>second Number : <input name="secondNumber" type="number" /></label>
          <button type="submit">Submit</button>
        </form>
    </div>
  );

}

export default App;
