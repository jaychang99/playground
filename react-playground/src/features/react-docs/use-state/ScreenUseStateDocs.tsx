/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

const App = () => {
  const [minute, setMinute] = useState(60);
  const [count, setCount] = useState(minute);

  const handleClick = () => {
    setMinute((prev) => prev - 1);

    console.log(count);
  };

  return (
    <div>
      <p>{count} 회 클릭하였습니다. </p>
      <button onClick={handleClick}>버튼</button>
    </div>
  );
};

export default App;
