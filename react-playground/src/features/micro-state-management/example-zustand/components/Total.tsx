import { useCounterStore } from '@/features/micro-state-management/example-zustand/stores/useCounterStore';
import { Store } from '@/features/micro-state-management/example-zustand/types/StoreState';

const selectCount1 = (state: Store) => state.count1;
const selectCount2 = (state: Store) => state.count2;

export const Total = () => {
  const count1 = useCounterStore(selectCount1);
  const count2 = useCounterStore(selectCount2);

  console.log('<Total /> has been rerendered');

  return (
    <div>
      <h2>Total</h2>
      {/* 문제 - 만약 count1 이 줄어든 만큼, count2 가 늘어나서 총합이 변경되지 않더라도, Total 컴포넌트는 여전히 리렌더링 될 것이다.  */}
      <p>Total: {count1 + count2}</p>
    </div>
  );
};
