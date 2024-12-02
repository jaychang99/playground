import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('apple');

  const handleClick = () => {
    setCount((prev) => prev + 1);

    if (count % 3 === 0) {
      setFruit('banana');
    } else {
      setFruit('apple');
    }
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <div>
        <h1 id="title">Hello, world</h1>
        <p id="count">Count: {count}</p>
        <p id="fruit">Fruit: {fruit}</p>
      </div>
    </>
  );
};

export default App;
