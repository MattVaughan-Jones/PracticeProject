import * as React from "react";

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <header>
        <p>Calculator Component</p>
        <p>{data}</p>
      </header>
      <body>
        <form>
          <label>Number 1 : <input type="number" /></label>
          <label className="padding: 20px; margin: 20px;">Operation : 
            <select>
              <option value="*">Multiply</option>
              <option value="/">Divide</option>
              <option value="+">Add</option>
              <option value="-">subtract</option>
            </select>
          </label>
          <label>Number 2 : <input type="number" /></label>
          <button type="submit">Submit</button>
        </form>
      </body>
    </div>
  );
}

export default App;
