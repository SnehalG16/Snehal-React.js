// Theme.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleTheme } from '../themeredux/action';

const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <button
        onClick={() => dispatch(handleTheme('light'))}
        disabled={theme === 'light'}
      
      >
        Switch to Light
      </button>
      <button
        onClick={() => dispatch(handleTheme('dark'))}
        disabled={theme === 'dark'}
      >
        Switch to Dark
      </button>
    </div>
  );
};

export default Theme;
