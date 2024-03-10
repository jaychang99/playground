import { Selector } from '@/features/micro-state-management/subscription-model/modules/useStore';

// eslint-disable-next-line prefer-const
let state = {
  a: 1,
  b: { c: 2, d: 3 },
  e: { f: 4, g: 5 },
};

type State = typeof state;

/**
 * 컴포넌트 사용처에서 selector 함수를 넘겨 줘야 한다는 점에서 수동 렌더링 최적화이다.
 */
const useSelector = <S,>(selector: Selector<State, S>) => {
  return selector(state);
};

const ComponentA = () => {
  const value = useSelector((state) => state.b.c);

  return <div>value: {value}</div>;
};

const ComponentB = () => {
  const value = useSelector((state) => state.e.g);

  return <div>value: {value}</div>;
};

export const RerenderingOptimization = () => {
  return (
    <div>
      <ComponentA />
      <ComponentB />
    </div>
  );
};
