import React from "react";
import Question from "./Question";

const QuestionContainer = (props) => {
  let renderQuestions = props.questions.map((question) => {
    return <Question text={question.text} answer={question.answer} />;
  });

  return <ul>{renderQuestions}</ul>;
};

export default QuestionContainer;
