import { getCountry } from '@/features/react-docs/use-effect/get-country';
import { useEffect, useState } from 'react';

interface Props {
  name: string;
  age: number;
}

const country = getCountry();

const App = ({ name, age }: Props) => {
  const [fruit, setFruit] = useState('banana');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`${name} likes ${fruit}. `);
    console.log(`${name} is from ${country}. `);
  }, [name, fruit, country]); // 적절한 의존성 배열?

  return (
    <div>
      <p>{age}</p>
      <p>{count}</p>
      <button onClick={() => setFruit('apple')}>Change fruit to apple</button>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase count
      </button>
    </div>
  );
};

export default App;
