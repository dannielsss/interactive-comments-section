import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div data-testid="counter">
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <p data-testid="counter-text">{counter}</p>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
    </div>
  );
}

export default Counter;
