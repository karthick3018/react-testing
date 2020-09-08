import React,{useState} from 'react';
import {Redirect} from 'react-router'
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
  const handleSubmit = async(e) => {
    e.preventDefault()
    let resultFromApi = await formReturnActualDataApi(state);
    setResult(resultFromApi?.data);
    if(resultFromApi?.data){
      return <Redirect to="/"/>
   }
  }
  return(
    <form onSubmit={handleSubmit}>
      <input name="name" data-testid="name" value={state?.name} onChange={handleChange}/>
      <input name="age" data-testid="age" value={state?.age} onChange={handleChange}/>
      <button type="submit">Submit</button>

     <div>
      <p data-testid="result-name">{result?.name}</p>
      <p data-testid="result-age">{result?.age}</p>
    </div> 
   </form>
  )
}

export default FormComponent