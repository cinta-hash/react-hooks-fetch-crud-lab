import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(questions => setQuestions(questions) )
  }, [])

  const saveQuestions = (questions) => {
    setQuestions([...questions, questions])
  }

  const deleteQuestion =(removedQuestion) =>{
    const leftQuestions = questions.filter((question) => question.id !== removedQuestion.id);
		setQuestions(leftQuestions);
  }

  function newAnswer(updateQuestion) {
		const updateQuestions = questions.map((question) => {
			if (updateQuestion.id === question.id) {
				return updateQuestion;
			} else {
				return question;
			}
		});
    setQuestions(updateQuestions);}

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm saveQuestions={saveQuestions}/> : <QuestionList questions={questions} deleteQuestion={deleteQuestion} newAnswer={newAnswer}/>}
    </main>
  );
}

export default App;
