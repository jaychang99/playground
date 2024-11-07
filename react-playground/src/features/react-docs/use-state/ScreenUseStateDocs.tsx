import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <p>{count} 회 클릭하였습니다. </p>
      <button onClick={() => handleClick()}>1 증가 시키기</button>
    </div>
  );
};

export default App;
