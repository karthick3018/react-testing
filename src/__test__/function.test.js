import React from 'react';
import {render} from '@testing-library/react';
import {addTwoNumbers,returnTheObject,filterFunction,asyncFunction}  from '../components/function';
import {getRequestApi as mockGetApi} from '../api';

jest.mock('../api')

afterEach(() => {
  jest.clearAllMocks()
})

test('check sum of two numbers',()=>{
  let result;
  const TestSumComponent = () => {
    result = addTwoNumbers(3,2);
    return result;
  } 
  render (<TestSumComponent />)
  expect(result).toBe(5)
})

test('check object value',()=>{
  let result,temp={id:3,name:'jhony'};
  result = returnTheObject();
  expect(temp).toEqual(expect.objectContaining(result));
})

test('filter function, array compare',()=>{
  let result,temp=[{id:1,name:'karthick',id:3,name:'jhony',id:4,name:'hellen'}];
  result = filterFunction();
  expect(temp).toEqual(expect.arrayContaining(result));
})

test('test a get api',()=>{
  mockGetApi.mockResolvedValueOnce({data:  'Success'})
})

test('a async function with setTimeOut',async()=>{
  let result = await asyncFunction();
  expect(result).toBe('resolved')
})