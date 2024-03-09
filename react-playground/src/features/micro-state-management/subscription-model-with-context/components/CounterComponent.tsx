import { State } from '@/features/micro-state-management/subscription-model-with-context/contexts/storeContext';
import { useSelector } from '@/features/micro-state-management/subscription-model-with-context/contexts/useSelector';
import { useSetState } from '@/features/micro-state-management/subscription-model-with-context/contexts/useSetState';

/**
 * CounterComponent 안에서 정의하면 useCallback 을 써줬어야 함.
 * 그렇지 않으면, useSelector 훅 내부에서 사용되는 useMemo 가 갱신된다. -> 불필요한 제구독 발생.
 * useCallback 사용 시 같은 값에 대한 전파를 막을 수 있음.
 */
const selectCount = (state: State) => state.count;

// 이 컴포넌트는 특정 store 와 연결되어 있지 않다는 것이 핵심이다.
export const CounterComponent: React.FC = () => {
  const count = useSelector(selectCount);
  const setState = useSetState();
  const increment = () => {
    setState((prevState) => ({ ...prevState, count: prevState.count + 1 }));
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>increment by 1</button>
    </div>
  );
};
