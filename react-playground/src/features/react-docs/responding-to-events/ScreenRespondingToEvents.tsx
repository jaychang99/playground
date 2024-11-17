/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return <Button onClick={handleClick}>{counter}</Button>;
};

const Button = ({ onClick, ...props }) => {
  return (
    <div>
      <p>This is a Button</p>
      <button
        {...props}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
      />
    </div>
  );
};

export default App;
