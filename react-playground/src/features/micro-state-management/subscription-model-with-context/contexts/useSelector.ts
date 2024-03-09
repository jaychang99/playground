import {
  State,
  StoreContext,
} from '@/features/micro-state-management/subscription-model-with-context/contexts/storeContext';
import { Selector } from '@/features/micro-state-management/subscription-model/modules/useStore';
import { useContext, useMemo } from 'react';
import { useSubscription } from 'use-subscription';

export const useSelector = <S>(selector: Selector<State, S>) => {
  const store = useContext(StoreContext); // 이제 store 를 인자로 받는 것이 아니라 context 에서 가져옴.

  const subscription = useMemo(
    () => ({
      getCurrentValue: () => selector(store.getState()),
      subscribe: store.subscribe,
    }),
    [selector, store],
  );

  return useSubscription(subscription);
};
