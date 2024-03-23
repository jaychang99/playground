import { proxyObject } from '@/features/micro-state-management/example-valtio/constants/proxyObject';
import { proxy, snapshot } from 'valtio';

const state = proxy({ count: 0 });
const snap1 = snapshot(state);

/**
 * state, snap1은 같은 값을 가지고 있지만, 서로 다른 객체이다.(서로 다른 참조를 가진다. )
 */
console.log('state: ', state); // { count: 0 }, proxy 로 감싼 변경 가능한 객체
console.log('snap1: ', snap1); // { count: 0 }, Object.freeze() 로 동결되어 변경 불가능한 객체
console.log('state === snap1: ', state === snap1); // false

function ScreenExampleValtio() {
  return (
    <div>
      <h2>Example Valtio</h2>
      <button onClick={() => proxyObject.count++}>Increment</button>
    </div>
  );
}

export default ScreenExampleValtio;
