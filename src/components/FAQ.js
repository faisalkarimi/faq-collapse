import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const FAQ = ({ question, answer }) => {
  return (
    <div className="container">
      <div className="question">
        <h3>{question}</h3>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <div className="answer">{answer}</div>
    </div>
  );
};

export default FAQ;
