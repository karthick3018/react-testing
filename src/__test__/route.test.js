import React from 'react';
import {BrowserRouter as ReactRouter} from 'react-router-dom';
import { Router } from 'react-router-dom'
import {render,fireEvent} from '@testing-library/react';
import { createMemoryHistory } from 'history'
import Routes from '../components/routes';


it ('render the routes',()=>{
  const {getByRole,getByText} = render(
    <ReactRouter>
      <Routes/>
    </ReactRouter>
  )
  expect(getByRole('heading')).toHaveTextContent(/Default/i)
  fireEvent.click(getByText(/Page1/i))
  expect(getByRole('heading')).toHaveTextContent(/First/i)
})

it('route to a page using history', () => {
  const history = createMemoryHistory()
  history.push(`/page1`)
  const { getByRole } = render(
    <Router history={history}>
      <Routes/>
    </Router>
  )
  expect(getByRole('heading')).toHaveTextContent('First')
})


 