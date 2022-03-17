import React, { useState} from 'react';

function InputCard(props :any) {
  const [question, setQuestion] = useState("Question 1")
  const [answer, setAnswer] = useState("Answer 1")
  const [show, setShow] = useState("question")

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (answer === "Answer 1") {
      alert(`Nice Job, its the right answer: ${answer}`);
    } else {
      alert(`OOF SIZE METER !  Wrong answer: ${answer}`)
    }
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
