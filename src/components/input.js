import React,{useState} from 'react'

const InputBox = () => {
  const [inputValue,setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <p>karthick</p>
    <label htmlFor="number-input">Number</label>
    <input data-testid="number-test" id="number-input" type='number' value={inputValue} onChange={handleInputChange} />
     <p data-testid="number-entered">{inputValue}</p>
   </div>
  )
}

export default InputBox;