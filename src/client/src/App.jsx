import { useState, useEffect } from "react";

function App() {
  let [testState, setTestState] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/test")
      .then((res) => res.text())
      .then((msg) => setTestState(msg))
      .catch((err) => {
        console.error(err);
        setTestState("Could not connect to test api endpoint :(");
      });
  }, [testState]);

  return (
    <div className="App">
      <header>
        <h1>Basic Mern Starter Template</h1>
        <hr />
        {testState ? (
          <p>
            API Working {Boolean(testState).toString()}; Test State: {testState}
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
}

export default App;
