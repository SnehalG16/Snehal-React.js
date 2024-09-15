
import React from 'react';
import { useSelector } from 'react-redux';
import Counterbtn from './Counterbtn';

const CounterValue = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <div >
      <div style={{ border: "2px solid black", height: "800px", marginTop: "20px" }}>
        <div style={{ marginLeft: "750px", fontSize: "20px" }}>
          {count}
        </div>
        <Counterbtn />
        <div style={{marginLeft:"370px" , marginTop:"90px"}}>
        <img src="https://www.spadequotes.com/wp-content/uploads/2024/01/Yellow-Captions-for-Your-Instagram.jpg" alt=""  />
        </div>
      </div>
    </div>
  );
};

export default CounterValue;
