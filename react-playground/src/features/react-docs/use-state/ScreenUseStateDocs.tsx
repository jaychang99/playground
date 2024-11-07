/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(1);

  const logHelloWorld = () => {
    console.log('hello, world');
  };

  useEffect(() => {
    console.log('hello, world');
  }, [setCount]);

  useEffect(() => {
    logHelloWorld();
  }, [logHelloWorld]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
