import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type SetStateFunction = Dispatch<SetStateAction<number>>;

let count = 1;
const setStateFunctions = new Set<SetStateFunction>();

export const Component1 = () => {
  const [state, setState] = useState(count);
  const increment = () => {
    {
      count += 1;
      setStateFunctions.forEach((setState) => setState(count));
    }
  };

  useEffect(() => {
    setStateFunctions.add(setState);
    return () => {
      setStateFunctions.delete(setState);
    };
  }, []);

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
      setStateFunctions.forEach((setState) => setState(count));
    }
  };

  useEffect(() => {
    setStateFunctions.add(setState);
    return () => {
      setStateFunctions.delete(setState);
    };
  }, []);

  return (
    <div>
      <p>{state}</p>
      <button onClick={increment}>increment by 2</button>
    </div>
  );
};
