import "./App.css";
import { useState } from "react";
import btnModule from "./Button.module.css";

function App() {
  let [status, setStatus] = useState(false);
  return (
    <div className="App">
      <div>
        <button className={btnModule.error}>Error</button>
        <button className={btnModule.danger}>Danger</button>
        <button className={btnModule.success}>Success</button>
      </div>
      <button onClick={() => setStatus(!status)}>
        {status ? " Hide Greeting" : "Show Greeting"}
      </button>

      {status ? <h1 className="para">Welcome Chandan Kumar</h1> : ""}
    </div>
  );
}

export default App;
