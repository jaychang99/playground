import { proxy, snapshot } from 'valtio';

const state = proxy({ count: 0 });
const snap1 = snapshot(state);

/**
 * state, snap1은 같은 값을 가지고 있지만, 서로 다른 객체이다.(서로 다른 참조를 가진다. )
 */
console.log('state: ', state); // { count: 0 }, proxy 로 감싼 변경 가능한 객체
console.log('snap1: ', snap1); // { count: 0 }, Object.freeze() 로 동결되어 변경 불가능한 객체
console.log('state === snap1: ', state === snap1); // false

++state.count;

const snap2 = snapshot(state);

console.log('state: ', state); // { count: 1 }
console.log('snap2: ', snap2); // { count: 1 }
console.log('snap1: ', snap1); // { count: 0 }
console.log('state === snap2: ', state === snap2); // false
console.log('snap1 === snap2: ', snap1 === snap2); // false

/**
 * proxy 와 snapshot 함수는 중첩된 객체에 대해서도 작동하며, 스냅숏 생성을 최정화한다.
 * snapshot 함수는 필요한 경우, 즉 속성이 변경될 때만 새 스냅숏을 생성한다.
 */

const state2 = proxy({
  obj1: { count: 0 },
  obj2: { count: 0 },
});

const snap21 = snapshot(state2);
console.log('snap21: ', snap21); // { obj1: { count: 0 }, obj2: { count: 0 } }

++state2.obj1.count;

const snap22 = snapshot(state2);
console.log('snap21: ', snap21); // { obj1: { count: 0 }, obj2: { count: 0 } }
console.log('snap22: ', snap22); // { obj1: { count: 1 }, obj2: { count: 0 } }
console.log('snap21.obj1 === snap22.obj1: ', snap21.obj1 === snap22.obj1); // false
console.log('snap21.obj2 === snap22.obj2: ', snap21.obj2 === snap22.obj2); // true -> 얘는 메모리 공유 (메모리 최적화)
