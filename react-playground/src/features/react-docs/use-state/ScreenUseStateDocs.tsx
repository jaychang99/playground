import { useState } from 'react';

const DATA1 = {
  name: 'John',
  age: 25,
};

const DATA2 = {
  name: 'John',
  age: 25,
};

const App = () => {
  const [data, setData] = useState(DATA1);
  const [count, setCount] = useState(0);

  const handleUpdateData = () => {
    setData(DATA2);
  };

  const handleUpdateCount = () => {
    setCount(0);
  };

  return (
    <div>
      <Children />
      <p>{count} 회 클릭하였습니다. </p>
      <button onClick={handleUpdateCount}>카운트 업데이트 버튼</button>
      <button onClick={handleUpdateData}>데이터 업데이트 버튼</button>
      <div>
        <p>{data.name}</p>
        <p>{data.age}</p>
      </div>
    </div>
  );
};

export default App;

const Children = () => {
  console.log('Children render');
  return <div>Children</div>;
};
