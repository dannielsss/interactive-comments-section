import React, { useState } from 'react';
import { CounterBox, CounterButton } from './Comment.styles';

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <CounterBox data-testid="counter">
      <CounterButton onClick={() => setCounter((prev) => prev + 1)}>
        +
      </CounterButton>
      <p data-testid="counter-text">{counter}</p>
      <CounterButton onClick={() => setCounter((prev) => prev - 1)}>
        -
      </CounterButton>
    </CounterBox>
  );
}

export default Counter;
