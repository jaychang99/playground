import { proxy, useSnapshot } from 'valtio';

const state = proxy({
  count1: 0,
  count2: 0,
});

export const Counter1 = () => {
  const snap = useSnapshot(state);
  const increment = () => ++state.count1;

  console.log('Counter 1 has been re-rendered');

  return (
    <div>
      {snap.count1} <button onClick={increment}>+1</button>
    </div>
  );
};

export const Counter2 = () => {
  const snap = useSnapshot(state);
  const increment = () => ++state.count2;

  console.log('Counter 2 has been re-rendered');

  return (
    <div>
      {snap.count2} <button onClick={increment}>+1</button>
    </div>
  );
};
