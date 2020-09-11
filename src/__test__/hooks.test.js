import React from 'react';
import {render,act} from '@testing-library/react';
import useCustomHook from '../components/customHooks';

test('custom hooks',()=>{
  let result;
  const TestHooksComponent = () => {
    result = useCustomHook();
    return result.state;
  } 
  render (<TestHooksComponent />)
  expect(result?.state).toBe(1)
  act(()=>result.incrementCurrentState())
  expect(result?.state).toBe(2)


})