import { useEffect, useState } from 'react';

export const useSyncExternalStore = <T>(
  subscribe: (callback: () => void) => () => void,
  getSnapshot: () => T,
) => {
  const [data, setData] = useState<T | undefined>(() => getSnapshot());

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setData(getSnapshot());
    });

    return () => {
      unsubscribe();
    };
  }, [getSnapshot, subscribe]);

  return data;
};
