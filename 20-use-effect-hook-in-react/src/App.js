import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  let [counterIncrement, setCounterIncrement] = useState(0);
  let [counterDecrement, setCounterDecrement] = useState(10);

  let incCounter = () => {
    setCounterIncrement(counterIncrement + 1);
  };
  
  let decCounter = () => {
    setCounterDecrement(counterDecrement - 1);
  };

  useEffect(() => {
    console.log("Hello from useEffect");
  }, [counterIncrement]);

  return (
    <div className="App">
      <h1>{counterIncrement} and {counterDecrement}</h1>
      <button onClick={incCounter}>Increment Count</button>
      <button onClick={decCounter}>Decrement Count</button>
    </div>
  );
}

export default App;
