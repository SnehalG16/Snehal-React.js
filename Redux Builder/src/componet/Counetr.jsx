import React from 'react';
import CounterValue from './CounterValue';
import { useSelector } from 'react-redux';

const Counter = () => {
  const theme = useSelector((state) => state.theme.theme);
  
  return (
    <div className={theme === 'light' ? 'light_theme' : 'dark_theme'} >
      <CounterValue />
      
    </div>
  );
};

export default Counter;
