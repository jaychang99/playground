import {
  Counter1Atom,
  Counter2Atom,
} from '@/features/micro-state-management/example-jotai/components/AtomCounters';

export const JotaiAtomExample = () => {
  return (
    <div>
      <h2>Jotai Atom Example</h2>
      <Counter1Atom />
      <Counter2Atom />
    </div>
  );
};
