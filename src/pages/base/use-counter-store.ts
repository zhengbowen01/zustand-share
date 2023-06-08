import { create } from "zustand";

interface State {
  count: number;
  add: (increase: number) => void;
  addOne: () => void;
  minus: (decrease: number) => void;
  minusOne: () => void;
  asyncAddOne: () => void;
}

const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export default create<State>((set, get) => ({
  count: 0,
  add: (increase: number) => {
    set((state) => ({
      count: state.count + increase,
    }));
  },
  minus: (decrease: number) => {
    set((state) => ({
      count: state.count - decrease,
    }));
  },
  addOne: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
  minusOne: () => {
    get().minus(1);
  },
  asyncAddOne: async () => {
    await delay(1000);
    get().addOne();
  },
}));
