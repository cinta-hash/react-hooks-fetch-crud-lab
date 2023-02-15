import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, deleteQuestions, newAnswer}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions.map((question) => (
					<QuestionItem 
          key={question.id} 
          question={question} 
          deleteQuestion={deleteQuestions}
          newAnswer={newAnswer}
          />
        ))};
      </ul>
    </section>
  );
}

export default QuestionList;
