import { create } from 'zustand';
import type { Store } from '@/features/micro-state-management/example-zustand/types/StoreState';

export const useCounterStore = create<Store>((set) => ({
  // setState 를 set 으로 줄이는 것은 좋은 규칙이다. - 다이시 카토
  count1: 0,
  count2: 0,
  total: 0,
  increment1: () =>
    set((prev) => ({
      count1: prev.count1 + 1,
      total: prev.count1 + 1 + prev.count2,
    })),
  increment2: () =>
    set((prev) => ({
      count2: prev.count2 + 1,
      total: prev.count2 + 1 + prev.count1,
    })),
}));
