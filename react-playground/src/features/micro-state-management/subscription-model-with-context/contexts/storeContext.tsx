import {
  Store,
  createStore,
} from '@/features/micro-state-management/subscription-model/modules/useStore';
import { ReactNode, createContext, useRef } from 'react';

export type State = { count: number; text?: string };
type StoreState = Store<State>;
type StoreProviderProps = {
  initialState: State;
  children: ReactNode;
};

const STORE_INITIAL_VALUE = { count: 0, text: 'hello' };

const store = createStore<State>(STORE_INITIAL_VALUE);
export const StoreContext = createContext<StoreState>(store);

export const StoreProvider: React.FC<StoreProviderProps> = ({
  initialState,
  children,
}) => {
  // useRef 는 스토어 객체가 첫 번째 렌더링에서 한 번만 초기화되게 만드는 데 사용된다.
  const storeRef = useRef<StoreState>();

  if (!storeRef.current) {
    storeRef.current = createStore(initialState);
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};
