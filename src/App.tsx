import React from 'react';
import './App.css';
import MentalCard from './components/Mental';
import InputCard from './components/Input';
import RadioCard from './components/Radio';

function App() {
  return (
    <div className="App">
      <MentalCard />
      <InputCard />
      <RadioCard />
    </div>
  );
}

export default App;
