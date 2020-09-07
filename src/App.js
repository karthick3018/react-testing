import React,{useState} from 'react';
import './App.css';

function App() {
  const [inputValue,setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  
  return (
    <div>
     <p>Karthick</p>
     <label htmlFor="number-input">Number</label>
     <input data-testid="number-test" id="number-input" type='number' value={inputValue} onChange={handleInputChange} />
      <p data-testid="number-entered">{inputValue}</p>
    </div>
  );
}

export default App;
