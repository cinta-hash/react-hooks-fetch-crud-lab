import React from "react";


function QuestionItem({ question, deleteQuestion, newAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
 function handleDelete(){
  fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => deleteQuestion(question))}

    const handleNewAnswer= (e)=>{
      fetch(`http://localhost:4000/questions/${question.id}`, {
        method: "PATCH",
         headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          correctIndex: e.target.value
        })
      })
      
      .then(res => res.json())
      .then(() =>newAnswer(question) )
    }
  
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleNewAnswer}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
