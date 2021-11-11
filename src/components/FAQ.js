import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container">
      <div
        className={isOpen ? "question show-answer" : "question"}
        onClick={handleClick}
      >
        <h3>{question}</h3>
        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
      </div>
      <div className="answer">{answer}</div>
    </div>
  );
};

export default FAQ;
