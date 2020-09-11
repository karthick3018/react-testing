import {useState,useEffect} from 'react';

const useCustomHook = () => {
  const [state,setState] = useState(0);

  useEffect(()=>{
     setState( state+1 )
  },[]) 

  const incrementCurrentState = () => {
    setState( state+1 )

  }

  return {state,incrementCurrentState}
}

export default useCustomHook;