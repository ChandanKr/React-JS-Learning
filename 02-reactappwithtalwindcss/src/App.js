import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(1);
  let [showName, setShowName] = useState(false);

  let template = "";

  if (showName) {
    template = (
      <>
        <button
          className="bg-[aqua] p-[10px]"
          onClick={() => setShowName(!showName)}
        >
          Hide Name
        </button>
        <h1 className="text-[40px] font-bold">Chandan Kumar</h1>
      </>
    );
  } else {
    template = (
      <button
        className="bg-[aqua] p-[10px]"
        onClick={() => setShowName(!showName)}
      >
        Show Name
      </button>
    );
  }

  let displayData = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <ShowHideName />
      {template}
      <h1 className="text-[40px] font-bold">{count}</h1>
      <button className="bg-[aqua] p-[10px]" onClick={() => displayData()}>
        Show Data
      </button>
      <h1 className="text-[40px] text-red-500 font-bold bg-[lightgreen]">
        Welcome Again Chandan
      </h1>
    </div>
  );
}

export default App;

let ShowHideName = () => {
  return (
    <>
      <h1>Welcome Welcome</h1>
    </>
  );
};
