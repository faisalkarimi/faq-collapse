import React from "react";
import FAQ from "./FAQ";
import { sampleQestions } from "../questions/sampleQuestions";

const FAQList = () => {
  return sampleQestions.map((question) => (
    <FAQ question={question.question} answer={question.answer} />
  ));
};

export default FAQList;
