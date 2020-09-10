import React from 'react';
import {render} from '@testing-library/react';
import {addTwoNumbers,returnTheArray}  from '../components/function';

test('check sum of two numbers',()=>{
  let result;
  const TestSumComponent = () => {
    result = addTwoNumbers(3,2);
    return result;
  } 
  render (<TestSumComponent />)
  expect(result).toBe(5)
})

test('check two array',()=>{
   let result,temp=[{id:1,name:'karthick',id:2,name:'raja'}] ;
    result = returnTheArray();
    expect(temp).toEqual(expect.arrayContaining(result));
})