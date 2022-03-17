import React, { useState} from 'react';

function MentalCard(props :any) {
  const [question, setQuestion] = useState("Question 1")
  const [answer, setAnswer] = useState("Answer 1")
  const [show, setShow] = useState("question")

  return (
    <div>
      <h1>MentalFlashCard</h1>
      <p>{show === "question" ? question : answer}</p>
      {show === "question" ? <button onClick={() => setShow("answer")}>Show answer</button> : <button onClick={() => setShow("question")}>Show question</button>}
    </div>
  );
}

export default MentalCard
