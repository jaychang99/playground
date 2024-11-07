import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(5);
    console.log(count);

    setCount((prev) => prev + 1);
    console.log(count);

    setCount(10);
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
