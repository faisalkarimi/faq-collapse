import React from "react";
import FAQ from "./FAQ";
const sampleQestion = {
  question: "What is the best way to learn React?",
  answer:
    "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React can also be used in the development of higher-level libraries, such as React Router for handling navigation, or React Redux for managing state. React is open source and MIT licensed.",
};
const FAQList = () => {
  return (
    <FAQ question={sampleQestion.question} answer={sampleQestion.answer} />
  );
};

export default FAQList;
