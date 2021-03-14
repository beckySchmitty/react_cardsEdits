import React, { useState } from 'react';

const useFlip = (initialState = true) => {
    // set intial state
  const [state, setState] = useState(initialState);
//   write func to toggle
  const toggleState = () => {
    setState(state => !state)
  }
  return [state, toggleState]
}
export default useFlip;