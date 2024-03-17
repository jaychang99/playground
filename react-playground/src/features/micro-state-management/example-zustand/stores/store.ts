import { create } from 'zustand';

export const store = create(() => ({ count: 0 }));

console.log(store.getState()); // { count: 0 }

store.setState({ count: 1 });

console.log(store.getState()); // { count: 1 }

// @ts-expect-error 허용되지 않는 케이스이므로 type error 발생 가능함.
store.count = 2; // Error: 동일한 참조를 가지기 때문에 변경사항 감지 불가

console.log(store.getState()); // { count: 2 }

store.setState({ count: 2 }); // { count: 2 }

console.log(store.getState()); // { count: 2 }

store.setState((state) => ({ count: state.count + 1 }));

console.log(store.getState()); // { count: 3 }
