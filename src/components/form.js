import React,{useState} from 'react';
import {formReturnActualDataApi} from '../api';

const FormComponent = () => {
  const [state,setState] = useState({
    name:'',
    age:''
  })
  const [result ,setResult] = useState(null)

  const handleChange = (e) => {
    setState({...state,[e.target.name]:e.target.value})
  }
  const handleSubmit = async() => {
    let resultFromApi = await formReturnActualDataApi(state);
    setResult(resultFromApi?.data);
  }
  return(
    <div>
      <input name="name" data-testid="name" value={state?.name} onChange={handleChange}/>
      <input name="age" data-testid="age" value={state?.age} onChange={handleChange}/>
      <button type="submit" onClick={handleSubmit}>Submit</button>

     <div>
      <p data-testid="result-name">{result?.name}</p>
      <p data-testid="result-age">{result?.age}</p>
    </div> 
   </div>
  )
}

export default FormComponent