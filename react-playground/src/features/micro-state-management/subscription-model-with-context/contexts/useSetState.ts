import { StoreContext } from '@/features/micro-state-management/subscription-model-with-context/contexts/storeContext';
import { useContext } from 'react';

// 모듈 상태와는 달리 컨텍스트를 사용해서 상태를 갱신하는 방법 제공
export const useSetState = () => {
  const store = useContext(StoreContext);

  return store.setState;
};
