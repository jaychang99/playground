// import './modules/proxySnapshotTest'; -> 실행하려면 주석 해제
import {
  Counter1,
  Counter2,
} from '@/features/micro-state-management/example-valtio/components/Counters';

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
