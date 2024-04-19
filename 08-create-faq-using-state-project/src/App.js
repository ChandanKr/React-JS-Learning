import { useState } from "react";
import "./App.css";
import { Questions } from "./Data/faqQuestions";

function App() {
  let [showAns, setShowAns] = useState();

  return (
    <div className="App">
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className="faqOuter">
        {Questions.map((data, i) => {
          return (
            <div className="faqItems" key={data.id}>
              <h3 onClick={()=>setShowAns(data.id)}>
                {data.id}. {data.question}
              </h3>
              <p className={showAns == data.id ? "activeAns" : ""}>
                {data.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
