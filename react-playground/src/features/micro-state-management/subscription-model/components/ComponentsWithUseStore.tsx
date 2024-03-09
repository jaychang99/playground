import {
  createStore,
  useStore,
} from '@/features/micro-state-management/subscription-model/modules/useStore';

const store = createStore(0);

export const ComponentWithUseStore1 = () => {
  const [state, setState] = useStore(store);

  const increment = () => {
    setState((prevState) => prevState + 1);
  };

  return (
    <div>
      <p>{state}</p>
      <button onClick={increment}>increment by 1</button>
    </div>
  );
};

export const ComponentWithUseStore2 = () => {
  const [state, setState] = useStore(store);

  const increment = () => {
    setState((prevState) => prevState + 2);
  };

  return (
    <div>
      <p>{state}</p>
      <button onClick={increment}>increment by 1</button>
    </div>
  );
};
