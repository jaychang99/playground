import { store } from '@/features/micro-state-management/example-zustand/stores/store';

function ScreenExampleZustand() {
  const importedStore = store;

  console.log(importedStore); // { count: 0 }

  return <div>ScreenExampleZustand</div>;
}

export default ScreenExampleZustand;
