import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

const RenderFullName = () => {
  const state = useSelector(state=>state.name);
  const dispatch = useDispatch();
  const addFullName = () => dispatch({type:'ADD_FULL_NAME'});

  return (
    <>
     <p>First Name : {state}</p>
     <button data-testid="dispatch-fullName" onClick={addFullName}>Render Full Name</button>
     <p data-testid="full-name">Full Name:{state}</p>
    </>
  )
}

export default RenderFullName;