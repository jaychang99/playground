import { useEffect, useState } from 'react';

const countObj = { value: 0 };

export const UseStateOptimizationSample = () => {
  const [count, setCount] = useState(countObj);
  const handleClick = () => {
    // countObj 의 값은 변경되지만, countObj 객체는 변경되지 않기 때문에 리액트는 변경되지 않았다고 추측한다.
    // 이것이 바로 리액트가 불변성을 기반으로 최적화한다는 의미다. (useMemo, memo 등에서도 활용)
    countObj.value += 1;
    setCount(countObj);
  };

  useEffect(() => {
    console.log('component updated!');
  });
  return (
    <div>
      <h2>UseStateOptimizationSample</h2>
      <p>Count: {count.value}</p>
      <button onClick={handleClick}>Update count</button>
    </div>
  );
};
