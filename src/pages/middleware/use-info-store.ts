import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";
import logger from "./logger";
import type { StateCreator } from "zustand";

interface State {
  name: string;
  age: number;
  changeName: (newName: string) => void;
  changeAge: (newAge: number) => void;
}

const createState: StateCreator<State, [["zustand/immer", never], any], any> = (
  set
) => {
  return {
    name: "zhangsan",
    age: 20,
    changeName: (newName: string) => {
      set((state) => {
        state.name = newName;
      });
    },
    changeAge: (newAge: number) => {
      set((state) => {
        state.age = newAge;
      });
    },
  };
};

export default create(
  logger(
    persist(immer(createState) as StateCreator<State>, {
      name: "info",
      storage: createJSONStorage(() => localStorage),
    }) as StateCreator<State>
  )
);
