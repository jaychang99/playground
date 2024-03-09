/* eslint-disable react-refresh/only-export-components */
import {
  Component1,
  Component2,
} from '@/features/micro-state-management/subscription-model/components/Component1';

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

export type CreateStore = typeof createStore;
type UpdateFunction<T> = (prevState: T) => T;
type NextState<T> = T | UpdateFunction<T>;
type Action<T> = T | UpdateFunction<T>;
type Unsubscribe = () => void;
type Callback = () => void;
type CreateStoreReturnType<T> = {
  getState: () => T;
  setState: (action: Action<T>) => void;
  subscribe: (callback: Callback) => Unsubscribe;
};

export const createStore = <T,>(initialState: T): CreateStoreReturnType<T> => {
  let state = initialState;
  const callbacks = new Set<Callback>();
  const getState = () => state;
  const setState = (action: NextState<T>) => {
    state =
      typeof action === 'function'
        ? (action as UpdateFunction<T>)(state)
        : action;
    callbacks.forEach((callback) => callback());
  };
  const subscribe = (callback: Callback) => {
    callbacks.add(callback);
    return () => {
      callbacks.delete(callback);
    };
  };

  return { getState, setState, subscribe };
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
