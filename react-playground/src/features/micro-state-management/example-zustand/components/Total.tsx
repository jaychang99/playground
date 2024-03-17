import { useCounterStore } from '@/features/micro-state-management/example-zustand/stores/useCounterStore';
import { Store } from '@/features/micro-state-management/example-zustand/types/StoreState';

// const selectCount1 = (state: Store) => state.count1;
// const selectCount2 = (state: Store) => state.count2;
const selectTotal = (state: Store) => state.count1 + state.count2;

export const Total = () => {
  // const count1 = useCounterStore(selectCount1);
  // const count2 = useCounterStore(selectCount2);
  const total = useCounterStore(selectTotal);

  console.log('<Total /> has been rerendered');

  return (
    <div>
      <h2>Total</h2>
      {/* total 이 변경될 때에만 리렌더링된다.  */}
      <p>Total: {total}</p>
    </div>
  );
};
