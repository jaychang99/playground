import { useStore } from '@/features/micro-state-management/example-zustand/stores/store';

function ScreenExampleZustand() {
  const { count } = useStore();

  console.log('__COMPONENT_RERENDERED__'); // rerender 확인용 로그

  const handleClickUpdateText = () => {
    useStore.setState({ text: 'world' }); // 화면과 무관한 text 를 업데이트했지만, 화면이 리렌더링된다.
  };

  return (
    <div>
      <h2>Example Zustand</h2>
      <p>Count: {count}</p>
      <button onClick={handleClickUpdateText}>Update text</button>
    </div>
  );
}

export default ScreenExampleZustand;
