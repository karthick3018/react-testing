import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import user from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import InputBox from '../components/input';
import ReactDOM from 'react-dom'


test('renders my name', () => {
  const { getByText } = render(<InputBox />);
  const linkElement = getByText(/karthick/i);
  expect(linkElement).toBeInTheDocument();
});

test ('check input type', ()=> {
  const div = document.createElement('div')
  ReactDOM.render(<InputBox />, div)
  expect(div.querySelector('input').type).toBe('number')
  expect(div.querySelector('input')).toHaveAttribute('type', 'number')
})

test ('check input type by id',()=>{
  const { getByTestId } = render(<InputBox />);
  const input = getByTestId('number-test')
  expect(input.type).toBe('number')
})

test ('handleChange input',()=>{
  const { getByTestId,getByText } = render(<InputBox />);
  const input = getByTestId('number-test')
  user.type(input,'10')
  //  fireEvent.change(input, {target: {value: 10}})
  const getResult = getByText('10');
  expect(getResult).toBeInTheDocument();
})
