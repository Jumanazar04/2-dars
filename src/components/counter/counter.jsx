import './counter.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';

export function Counter (){
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className='counter container'>
      <h1>Counter: {counter}</h1>
      <button className='btn btn-primary' onClick={incrementCounter}>Increase</button>
      <button className='btn btn-primary' onClick={decrementCounter}>Decrease</button>
    </div>
  );
};

