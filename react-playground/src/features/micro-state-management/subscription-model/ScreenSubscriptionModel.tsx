/* eslint-disable react-refresh/only-export-components */
import {
  Component1,
  Component2,
} from '@/features/micro-state-management/subscription-model/components/Component1';

type UpdateFunction<T> = (state: T) => T;
type NextState<T> = T | UpdateFunction<T>;

export const createContainer = <T,>(initialState: T) => {
  let state = initialState;
  const getState = () => state;
  const setState = (nextState: NextState<T>) => {
    state =
      typeof nextState === 'function'
        ? (nextState as UpdateFunction<T>)(state) // 실제로 함수 자체가 state 인지, update function 이 들어온 것인지 typescript 는 알 수가 없음.
        : nextState;
  };

  return { getState, setState };
};

const ScreenSubscriptionModel = () => {
  const { getState, setState } = createContainer({ count: 0 });

  const handleClick = () => {
    setState((state) => ({ ...state, count: state.count + 1 }));
  };

  return (
    <div>
      <button onClick={handleClick}>current count: {getState().count}</button>
      <Component1 />
      <Component2 />
    </div>
  );
};

export default ScreenSubscriptionModel;
