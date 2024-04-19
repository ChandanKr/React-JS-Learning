import { useState } from "react";
import "./App.css";
import { tabs } from "./Data/tabs";

function App() {
  let [activeTabs, setActiveTabs] = useState(0);
  let [activeContent, setActiveContent] = useState(tabs[0]);

  let changeData = (index) => {
    setActiveTabs(index);
    setActiveContent(tabs[index]);
  };

  return (
    <div className="App">
      <div className="tabsOuter">
        <h1 className="h1tag">Law Prep Vision Mission and Values</h1>
        <ul>
          {tabs.map((tabsItem, index) => {
            return (
              <li key={index}>
                <button
                  className={activeTabs === index ? "activeButton" : ""}
                  onClick={()=>changeData(index)}
                >
                  {tabsItem.title}
                </button>
              </li>
            );
          })}
        </ul>
        {activeContent !== undefined ? <p>{activeContent.description}</p> : ""}
      </div>
    </div>
  );
}

export default App;
