import React from 'react';
import {Redirect as MockRedirect} from 'react-router'
import { render,fireEvent,wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import FormComponent from '../components/form';
import {formReturnActualDataApi as mockFormApi} from '../api'

jest.mock('../api')

jest.mock('react-router', () => {
  return {
    Redirect: jest.fn(() => null),
  }
})

afterEach(() => {
  jest.clearAllMocks()
})


test('form submit',async()=>{
  const state = {name:'karthick',age:"24"}
  mockFormApi.mockResolvedValueOnce({data:  state})
  
  const {getByText,getByTestId} = render(<FormComponent/>)
  const nameInput = getByTestId('name');
  const ageInput = getByTestId('age');

  fireEvent.change(nameInput,{target:{value:state.name}})
  fireEvent.change(ageInput,{target:{value:state.age}})

  fireEvent.click(getByText(/submit/i))

  expect(mockFormApi).toHaveBeenCalledWith(state)

  await wait(() => expect(getByTestId('result-name')).toHaveTextContent(state.name)) // having one fn inside reduces the execution time
  
  expect(getByTestId('result-age')).toHaveTextContent(state.age)

    // await wait(() => expect(MockRedirect).toHaveBeenCalledWith({to: '/'}, {}))


})