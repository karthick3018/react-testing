import React from 'react';
import {BrowserRouter as ReactRouter} from 'react-router-dom'
import {render,fireEvent} from '@testing-library/react';
import Routes from '../components/routes';


test ('render the routes',()=>{
  const {getByRole,getByText} = render(
    <ReactRouter>
      <Routes/>
    </ReactRouter>
  )
  expect(getByRole('heading')).toHaveTextContent(/Default/i)
  fireEvent.click(getByText(/Page1/i))
  expect(getByRole('heading')).toHaveTextContent(/First/i)

  
})

 