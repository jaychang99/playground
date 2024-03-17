import { JotaiAtomExample } from '@/features/micro-state-management/example-jotai/JotaiAtomExample';
import { JotaiContextExample } from '@/features/micro-state-management/example-jotai/JotaiContextExample';

export const ScreenExampleJotai = () => {
  return (
    <div>
      <JotaiContextExample />
      <JotaiAtomExample />
    </div>
  );
};
