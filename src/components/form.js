import React,{useState} from 'react';
import {Redirect} from 'react-router'
import {formReturnActualDataApi} from '../api';

const FormComponent = () => {
  const [state,setState] = useState({
    name:'',
    age:'',
    option:'option1'
  })
  const [result ,setResult] = useState(null);
  const [resultBool ,setResultBool] = useState(false);
  const options = [{label:'Option1',value:'option1',id:1},{label:'Option2',value:'option2',id:2}];
  
  const handleChange = (e) => {
    setState({...state,[e.target.name]:e.target.value})
  }
  
  const handleSelectChange = (e) => {
    setState({...state,option:e.target.value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    let resultFromApi = await formReturnActualDataApi(state);
    setResult(resultFromApi?.data);
    // setResultBool(true)
  }

  if(resultBool){
    return <Redirect to="/"/>
  }

  return(
    <form onSubmit={handleSubmit}>
      <input name="name" data-testid="name" value={state?.name} onChange={handleChange}/>
      <input name="age" data-testid="age" value={state?.age} onChange={handleChange}/>

      <select data-testid="select-box" value={state?.option} onChange={handleSelectChange}>
       {options.map(eachOption=>(<option key={eachOption.id} value={eachOption.value}>{eachOption.label}</option>))}
      </select>

      <button type="submit">Submit</button>

     <div>
      <p data-testid="result-name">{result?.name}</p>
      <p data-testid="result-age">{result?.age}</p>
      <p data-testid="result-select">{result?.option}</p>
    </div> 
   </form>
  )
}

export default FormComponent