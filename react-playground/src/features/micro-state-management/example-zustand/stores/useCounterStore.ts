import { create } from 'zustand';
import type { StoreState } from '@/features/micro-state-management/example-zustand/types/StoreState';

export const useCounterStore = create<StoreState>(() => ({
  count1: 0,
  count2: 0,
}));
