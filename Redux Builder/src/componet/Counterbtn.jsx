// CounterButtons.jsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { handleAdd, handleReduce } from '../redux/action';

const Counterbtn = () => {
  const dispatch = useDispatch();

  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <button onClick={() => dispatch(handleAdd(1))}>ADD</button>
      <button onClick={() => dispatch(handleReduce(1))}>REDUCE</button>
    </div>
  );
};

export default Counterbtn;
