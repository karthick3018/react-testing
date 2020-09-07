import React from 'react';
import FormComponent from '../components/form';
import { render,fireEvent,wait } from '@testing-library/react';
import {formReturnActualDataApi as mockFormApi} from '../api'
import '@testing-library/jest-dom/extend-expect'

jest.mock('../api')


test('form submit',async()=>{
  const state = {name:'karthick',age:"24"}
  mockFormApi.mockResolvedValueOnce({data:  state})
  const {getByText,getByTestId,debug,getByLabelText} = render(<FormComponent/>)
  const nameInput = getByTestId('name');
  const age = getByTestId('age');
  fireEvent.change(nameInput,{target:{value:state.name}})
  fireEvent.change(age,{target:{value:state.age}})

  fireEvent.click(getByText(/submit/i))

  expect(mockFormApi).toHaveBeenCalledWith(state)
  expect(mockFormApi).toHaveBeenCalledTimes(1)

  await wait(() =>
    expect(getByTestId('result-name')).toHaveTextContent(state.name),
    // expect(getByTestId('result-age')).toHaveTextContent(state.age)
  )

})