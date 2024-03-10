// eslint-disable-next-line prefer-const
let state = {
  a: 1,
  b: { c: 2, d: 3 },
  e: { f: 4, g: 5 },
};

const ComponentA = () => {
  return <div>value: {state.b.c}</div>;
};

const ComponentB = () => {
  return <div>value: {state.e.g}</div>;
};

export const RerenderingOptimization = () => {
  return (
    <div>
      <ComponentA />
      <ComponentB />
    </div>
  );
};
