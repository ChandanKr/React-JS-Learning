import { useState } from "react";
import "./App.css";
import { bodyContents } from "./texts/bodyContents.js";
import { modalContents } from "./texts/modalContents.js";

function App() {
  let [modalStatus, setModalStatus] = useState(false);

  return (
    <div className="App">
      <button className="btn" onClick={() => setModalStatus(true)}>
        Contact Us
      </button>
      <div
        className={`modalOverlay ${modalStatus ? "activeModalOverlay" : ""}`}
      ></div>
      <div className={`modalDiv ${modalStatus ? "activeModalDiv" : ""}`}>
        <h2>Contact Us</h2>
        <button className="closeBtn" onClick={() => setModalStatus(false)}>
          &times;
        </button>
        <h4>{modalContents}</h4>
      </div>

      <h1>Chandan Kumar</h1>
      <p>{bodyContents}</p>
    </div>
  );
}

export default App;
