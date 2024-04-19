import React, { useState } from "react";
import "../Components/FAQs.css";
import { Questions } from "../Data/faqQuestions";

export default function FAQs() {
  let [currentID, setCurrentID] = useState();
  let itemsData = Questions.map((questionsData, index) => {
    let itemDetails = {
      questionsData,
      currentID,
      setCurrentID,
    };
    return <FaqItems itemDetails={itemDetails} key={index} />;
  });

  return (
    <div>
      <h1>FAQs with Props Drilling</h1>
      <div className="faqOuter">{itemsData}</div>
    </div>
  );
}

const FaqItems = ({ itemDetails }) => {
  let { questionsData, currentID, setCurrentID } = itemDetails;
  return (
    <>
      <div className="faqItems">
        <h3 onClick={() => setCurrentID(questionsData.id)}>
          {questionsData.id}. {questionsData.question}
        </h3>
        <p className={currentID === questionsData.id ? "activeAns" : ""}>
          {questionsData.answer}
        </p>
      </div>
    </>
  );
};
