import { useState } from 'react';

const App = () => {
  const [_, forceUpdate] = useState({});

  let count = 0;

  const handleClick = () => {
    count++;
    forceUpdate({});
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <div>Count: {count}</div>
    </div>
  );
};

export default App;
