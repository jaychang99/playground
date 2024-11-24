import { useState } from 'react';

const initializerForUseState = () => {
  console.log('hello, world');
  return 0;
};

const App = () => {
  const [count, setCount] = useState(initializerForUseState());

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <div>Count: {count}</div>
    </div>
  );
};

export default App;
