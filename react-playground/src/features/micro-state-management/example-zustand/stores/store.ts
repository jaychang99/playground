import { create } from 'zustand';

type Store = {
  count: number;
  text: string;
};

export const store = create<Store>(() => ({ count: 0, text: 'hello' }));

store.subscribe((state) => {
  console.log(`Store's state has been changed:`, state);
});

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

store.setState({ count: 1, text: 'world' }); // store 는 불변으로 변경되어야 한다.

console.log(store.getState()); // { count: 1, text: 'world' }

store.setState({ count: 100 }); // store 는 새 상태와 이전 상태를 병합한다. 따라서 설정하려는 속성만 지정해도 된다. 내부적으로 Object.assign() 을 사용한다.

console.log(store.getState()); // { count: 100, text: 'world' }
