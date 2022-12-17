import * as React from "react";

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <header>
        <p>Calculator Component</p>
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;
