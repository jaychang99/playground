import { Counter1 } from '@/features/micro-state-management/example-zustand/components/Counter1';
import { Counter2 } from '@/features/micro-state-management/example-zustand/components/Counter2';
import { Total } from '@/features/micro-state-management/example-zustand/components/Total';
import { useStore } from '@/features/micro-state-management/example-zustand/stores/store';

function ScreenExampleZustand() {
  // const { count } = useStore();
  // const count = useStore((state) => state.count); // 수동 렌더링 최적화
  const [{ count }] = useStore((state) => [{ count: state.count }]); // 수동 렌더링 최적화 - 잘못된 사용 케이스 -> 선택자 함수가 새 객체를 포함해 새로운 배열을 생성하므로 렌더링 최적화가 불가능하다.

  console.log('__COMPONENT_RERENDERED__'); // rerender 확인용 로그

  const handleClickUpdateText = () => {
    useStore.setState({ text: 'world' }); // selector 함수를 useStore 에 넘겼으므로, 이제 text 가 변경되더라도 컴포넌트가 불필요하게 리렌더링되지 않는다.
  };

  return (
    <div>
      <h2>Example Zustand</h2>
      <p>Count: {count}</p>
      <button onClick={handleClickUpdateText}>Update text</button>
      <Counter1 />
      <Counter2 />
      <Total />
    </div>
  );
}

export default ScreenExampleZustand;
