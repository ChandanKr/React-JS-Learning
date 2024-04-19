import { useState } from "react";
import "./App.css";
import {
  symbolsChar,
  uppercaseChar,
  lowercaseChar,
  numbersChar,
} from "./data/PassChar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [numbers, setNumbers] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordLength, setPasswordLength] = useState(6);
  let [displayPass, setDisplayPass] = useState("");

  let handleGeneratePasswordBtn = () => {
    let charSet = "";
    let finalPassword = "";
    if (uppercase || lowercase || numbers || symbols) {
      if (uppercase) charSet += uppercaseChar;
      if (lowercase) charSet += lowercaseChar;
      if (numbers) charSet += numbersChar;
      if (symbols) charSet += symbolsChar;

      for (let i = 0; i < passwordLength; i++) {
        finalPassword += charSet.charAt(
          Math.floor(Math.random() * charSet.length)
        );
      }
      setDisplayPass(finalPassword);
      toast.success("Password Generated Successfully.", { theme: "colored" });
    } else {
      toast.error("Select Atleast One Checkbox.", { theme: "colored" });
    }
  };

  let copyPassword = () => {
    if (displayPass !== "") {
      navigator.clipboard.writeText(displayPass);
      toast.success("Password Copied To Clipboard.", { theme: "colored" });
    }
    else{toast.error("Nothing Generated to Copy.", { theme: "colored" });}
  };

  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>

        <div className="passwordBoxIn">
          <input type="text" readOnly value={displayPass} />
          <button onClick={copyPassword}>Copy</button>
        </div>
        <div className="requirements">
          <label>Password Length</label>
          <input
            type="number"
            value={passwordLength}
            min={6}
            max={20}
            onChange={(event) => setPasswordLength(event.target.value)}
          />
        </div>
        <div className="requirements">
          <label>Including Uppercase</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>
        <div className="requirements">
          <label>Including Lowercase</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>
        <div className="requirements">
          <label>Including Numbers</label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
        </div>
        <div className="requirements">
          <label>Including Symbols</label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>

        <button onClick={handleGeneratePasswordBtn} className="generateBtn">
          Generate Now
        </button>
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
