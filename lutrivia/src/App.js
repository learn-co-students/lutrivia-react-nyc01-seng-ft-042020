import React from "react";

import LutriviaHeader from "./components/lutriviaHeader.js";
import QuestionContainer from "./components/QuestionContainer";
import data from "./data.js";

function App() {
  return (
    <div className="container">
      <LutriviaHeader />
      <QuestionContainer questions={data.questions} />
    </div>
  );
}

export default App;
