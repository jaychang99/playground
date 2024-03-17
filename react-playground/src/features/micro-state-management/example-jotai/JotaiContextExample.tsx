import { Counter1 } from '@/features/micro-state-management/example-jotai/components/Counter1';
import { Counter2 } from '@/features/micro-state-management/example-jotai/components/Counter2';

export const JotaiContextExample = () => {
  return (
    <div>
      <h2>Jotai Context Example</h2>
      <Counter1 />
      <Counter2 />
    </div>
  );
};
