import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const createContainer = <T>(initialState: T) => {
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
type Callback = () => void;
type Unsubscribe = () => void;
type CreateStoreReturnType<T> = {
  getState: () => T;
  setState: (action: Action<T>) => void;
  subscribe: (callback: Callback) => Unsubscribe;
};

export const createStore = <T>(initialState: T): CreateStoreReturnType<T> => {
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

type UseStoreReturnType<T> = [T, Dispatch<SetStateAction<T>>];
export const useStore = <T>(
  store: CreateStoreReturnType<T>,
): UseStoreReturnType<T> => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    setState(store.getState()); // useEffect 가 뒤늦게 실행되어서 store 가 이미 새로운 상태를 가지고 있을 가능성이 있기 때문.
    return unsubscribe;
  }, [store]);

  return [state, store.setState] as const;
};
