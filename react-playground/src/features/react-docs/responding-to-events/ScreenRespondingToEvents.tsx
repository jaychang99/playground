import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  return <button onClick={() => handleClick()}>{counter}</button>;
};

export default App;
