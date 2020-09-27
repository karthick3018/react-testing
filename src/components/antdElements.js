import React,{useState} from 'react';
import {Input} from 'antd';

const AntElements = () => {
  const [state,setState] = useState('');

  const handleChange = (e) => {
    setState(e.target.value)
  }

  return (
    <>
      <Input data-testid="ant-input" value={state} onChange={handleChange}/>
      <p data-testid="ant-input-result">{state}</p>
    </>
  )
}

export default AntElements;