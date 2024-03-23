// import './modules/proxySnapshotTest'; -> 실행하려면 주석 해제
import { proxy, useSnapshot } from 'valtio';

const state = proxy({
  count1: 0,
  count2: 0,
});

const Counter1 = () => {
  const snap = useSnapshot(state);
  const increment = () => ++state.count1;

  console.log('Counter 1 has been re-rendered');

  return (
    <div>
      {snap.count1} <button onClick={increment}>+1</button>
    </div>
  );
};

const Counter2 = () => {
  const snap = useSnapshot(state);
  const increment = () => ++state.count2;

  console.log('Counter 2 has been re-rendered');

  return (
    <div>
      {snap.count2} <button onClick={increment}>+1</button>
    </div>
  );
};

function ScreenExampleValtio() {
  return (
    <div>
      <h2>Example Valtio</h2>
      {/* <button onClick={() => proxyObject.count++}>Increment</button> */}
      <Counter1 />
      <Counter2 />
    </div>
  );
}

export default ScreenExampleValtio;
