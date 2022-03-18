import React, { useState} from 'react';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormLabel from '@mui/material/FormLabel';
// import Button from '@mui/material/Button';

function RadioCard(props :any) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("Choose wisely");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (value === "answer 1") {
      setHelperText("You got it!");
      setError(false);
    } else if (value === "answer 2" || value === "answer 3") {
      setHelperText("Sorry, wrong answer!")
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setHelperText(' ');
    setError(false);
    console.log(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>RadioFlashCard</p>
        <div>
          <input type="radio" id="Choice1" name="answer" value="answer 1" onChange={handleRadioChange}></input>
            <label htmlFor="Choice1">Answer 1</label>

          <input type="radio" id="Choice2" name="answer" value="answer 2" onChange={handleRadioChange}></input>
            <label htmlFor="Choice1">Answer 2</label>

          <input type="radio" id="Choice3" name="answer" value="answer 3" onChange={handleRadioChange}></input>
            <label htmlFor="Choice3">Answer 3</label>
            <div>
              <button type="submit">Envoyer</button>
            </div>
            {/* {show === "question" ? <button onClick={() => setShow("answer")}>Show answer</button> : <button onClick={() => setShow("question")}>Show question</button>} */}
          </div>
      </form>
    </div>

    // <form onSubmit={handleSubmit}>
    //     <FormControl sx={{ m: 3 }} error={error} variant="standard">
    //       <FormLabel id="demo-error-radios">RadioFlashCard</FormLabel>
    //       <RadioGroup
    //         aria-labelledby="demo-error-radios"
    //         name="quiz"
    //         value={value}
    //         onChange={handleRadioChange}
    //       >
    //         <FormControlLabel value="best" control={<Radio />} label="The best!" />
    //         <FormControlLabel value="worst" control={<Radio />} label="The worst." />
    //       </RadioGroup>
    //       <FormHelperText>{helperText}</FormHelperText>
    //       <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
    //         Check Answer
    //       </Button>
    //     </FormControl>
    //   </form>
  );
}

export default RadioCard
