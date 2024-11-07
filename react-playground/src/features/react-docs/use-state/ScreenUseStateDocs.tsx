import { useState } from 'react';

const updateState = (prev: number) => {
  console.log(prev);

  return prev + 1;
};

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count} 회 클릭하였습니다. </p>
      <button onClick={() => setCount(updateState)}>1 증가 시키기</button>
    </div>
  );
};

export default App;
