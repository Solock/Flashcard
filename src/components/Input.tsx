import React, { useState} from 'react';

function InputCard(props :any) {
  const [question, setQuestion] = useState("Question 1")
  const [answer, setAnswer] = useState("Answer 1")
  const [show, setShow] = useState("question")

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert(`The answer you entered was: ${answer}`);
  }


  return (
    <form onSubmit={handleSubmit}>
      <h1>InputFlashCard</h1>
      <label>Enter your answer:
        <input
          type="text"
          onChange={(e) => setAnswer(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default InputCard
