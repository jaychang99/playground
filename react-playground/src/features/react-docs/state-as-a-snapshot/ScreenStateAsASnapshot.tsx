import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    setTimeout(() => {
      setCount(count + 1);
    }, 2000);

    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <div>Count: {count}</div>
    </div>
  );
};

export default App;
