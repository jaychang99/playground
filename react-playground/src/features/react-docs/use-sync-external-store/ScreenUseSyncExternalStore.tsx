import { useSyncExternalStore } from 'react';

type Listener<TValue> = (value: TValue) => void;
type Unsubscribe = () => void;

interface MyStore<TValue> {
  value: TValue;
  listeners: Set<Listener<TValue>>;
  setValue: <T extends TValue>(values: T) => void;
  getValue: () => TValue;
  subscribe: (listener: Listener<TValue>) => Unsubscribe;
}

interface User {
  name: string;
  age: number;
}

const myStore: MyStore<User> = {
  value: {
    name: 'John',
    age: 30,
  },

  listeners: new Set(),

  setValue(value) {
    this.value = value;
    this.listeners.forEach((cb) => cb(this.value));
  },

  getValue() {
    return this.value;
  },

  subscribe(listener) {
    this.listeners.add(listener);

    const unsubscribe = () => {
      this.listeners.delete(listener);
    };

    return unsubscribe;
  },
};

const subscribe = (callback: () => void) => myStore.subscribe(callback);
const getSnapshot = () => myStore.getValue();

const ScreenUseSyncExternalStore = () => {
  const data = useSyncExternalStore<User>(subscribe, getSnapshot);

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
      <button
        onClick={() => {
          myStore.setValue({
            name: 'hey',
            age: 10,
          });
        }}
      >
        Increment age
      </button>
    </div>
  );
};

export default ScreenUseSyncExternalStore;
