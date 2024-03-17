import { useCounterStore } from '@/features/micro-state-management/example-zustand/stores/useCounterStore';
import { Store } from '@/features/micro-state-management/example-zustand/types/StoreState';

const selectCount1 = (state: Store) => state.count1;

export const Counter1 = () => {
  const count1 = useCounterStore(selectCount1);

  const increment1 = () => {
    /**
     * @question
     * use* 의 훅 (혹 이기는 한가) 함수 안에서 사용하는 것이 말이 되는지?
     * @description store.setState 를 직접 변경하고 있으나, 재사용성을 위해, 이 함수를 store 안에 정의해둘 수 있다.
     */
    useCounterStore.setState((prev) => ({ count1: prev.count1 + 1 }));
  };

  console.log('<Counter1 /> has been rerendered');

  return (
    <div>
      <h2>Counter1</h2>
      <p>Count: {count1}</p>
      <button onClick={increment1}>Increment</button>
    </div>
  );
};
