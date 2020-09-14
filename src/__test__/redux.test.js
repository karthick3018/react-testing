import React from 'react'
import {render,fireEvent} from '@testing-library/react';
import {Provider} from 'react-redux'
import {store} from '../redux/store';
import RenderName from '../components/redux';

it ('renders a redux based component',()=>{
  const {getByTestId} =  render(
    <Provider  store={store}>
      <RenderName/>
    </Provider>
 )
 fireEvent.click(getByTestId('dispatch-fullName'))
 expect(getByTestId('full-name')).toHaveTextContent(/karthick raja/i)
})