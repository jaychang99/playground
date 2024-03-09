import { useState } from 'react';

/**
 * 작동하지 않은 예제
 */
let count = 1;

export const Component1 = () => {
  const [state, setState] = useState(count);
  const increment = () => {
    {
      count += 1;
      setState(count);
    }
  };

  return (
    <div>
      <p>{state}</p>
      <button onClick={increment}>increment by 1</button>
    </div>
  );
};
export const Component2 = () => {
  const [state, setState] = useState(count);
  const increment = () => {
    {
      count += 2;
      setState(count);
    }
  };

  return (
    <div>
      <p>{state}</p>
      <button onClick={increment}>increment by 2</button>
    </div>
  );
};
