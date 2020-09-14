import React from 'react';
import AntElements from '../components/antdElements';
import {render,act} from '@testing-library/react'
import user from '@testing-library/user-event'


it('makes onChange for ant input',()=>{
 const {getByTestId} = render(<AntElements/>)
 const input = getByTestId('ant-input')
 user.type(input,'ant box')
 act(()=>expect(getByTestId('ant-input-result')).toHaveTextContent('ant box'))
})