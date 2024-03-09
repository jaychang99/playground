import {
  createStore,
  useStoreSelector,
  useStoreSelectorWithSubscription,
} from '@/features/micro-state-management/subscription-model/modules/useStore';

const store = createStore({ count1: 0, count2: 0 });

export const ComponentWithUseStoreSelector1 = () => {
  const state = useStoreSelectorWithSubscription(
    store,
    (state) => state.count1,
  );
  const increment = () => {
    store.setState((prevState) => ({
      ...prevState,
      count1: prevState.count1 + 1,
    }));
  };

  return (
    <div>
      <p>{state}</p>
      <button onClick={increment}>increment by 1</button>
    </div>
  );
};

export const ComponentWithUseStoreSelector2 = () => {
  const state = useStoreSelector(store, (state) => state.count2);

  const increment = () => {
    store.setState((prevState) => ({
      ...prevState,
      count2: prevState.count2 + 2,
    }));
  };

  return (
    <div>
      <p>{state}</p>
      <button onClick={increment}>increment by 1</button>
    </div>
  );
};
