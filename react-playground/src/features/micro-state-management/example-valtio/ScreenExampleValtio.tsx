import { proxyObject } from '@/features/micro-state-management/example-valtio/constants/proxyObject';

function ScreenExampleValtio() {
  return (
    <div>
      <h2>Example Valtio</h2>
      <button onClick={() => proxyObject.count++}>Increment</button>
    </div>
  );
}

export default ScreenExampleValtio;
