import { useState } from 'react';

export const Counter1 = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);

  return (
    <div>
      <h2>Counter1</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
};
