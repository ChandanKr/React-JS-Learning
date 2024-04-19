import { useState } from "react";
import "./App.css";
import redEyeLogo from "../src/images/eye-logo-red.svg";
import greenEyeLogo from "../src/images/eye-logo-green.svg";

function App() {
  let [passwordStatus, setPasswordStatus] = useState(false);

  return (
    <div className="App">
      <input
        className="inputBox"
        type={passwordStatus ? "text" : "password"}
      ></input>
      <img
        className="eye-logo"
        src={passwordStatus ? greenEyeLogo : redEyeLogo}
        alt="eye icon"
        onClick={() => setPasswordStatus(!passwordStatus)}
      />
    </div>
  );
}

export default App;
