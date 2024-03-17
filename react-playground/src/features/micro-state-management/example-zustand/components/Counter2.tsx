import { useCounterStore } from '@/features/micro-state-management/example-zustand/stores/useCounterStore';
import { Store } from '@/features/micro-state-management/example-zustand/types/StoreState';

const selectCount2 = (state: Store) => state.count2;
const selectIncrement2 = (state: Store) => state.increment2;

export const Counter2 = () => {
  const count2 = useCounterStore(selectCount2);
  const increment2 = useCounterStore(selectIncrement2);

  console.log('<Counter2 /> has been rerendered');

  return (
    <div>
      <h2>Counter2</h2>
      <p>Count: {count2}</p>
      <button onClick={increment2}>Increment</button>
    </div>
  );
};
