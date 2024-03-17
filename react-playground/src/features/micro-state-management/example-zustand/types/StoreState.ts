type StoreState = {
  count1: number;
  count2: number;
};

type StoreAction = {
  increment1: () => void;
  increment2: () => void;
};

export type Store = StoreState & StoreAction;
