import { atom, useAtom } from 'jotai';

const countAtom = atom(0);

export const Counter1Atom = () => {
  const [count, setCount] = useAtom(countAtom);
  const increment = () => setCount((c) => c + 1);

  return (
    <div>
      <h2>Counter1Atom</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
};

export const Counter2Atom = () => {
  const [count, setCount] = useAtom(countAtom);
  const increment = () => setCount((c) => c + 1);

  return (
    <div>
      <h2>Counter2Atom</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
};
