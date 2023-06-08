import { create } from "zustand";

interface State {
  name: string;
  age: number;
  changeName: (newName: string) => void;
  changeAge: (newAge: number) => void;
}

export default create<State>((set) => ({
  name: "zhangsan",
  age: 20,
  changeAge: (age) => {
    set({
      age,
    });
  },
  changeName: (name) => {
    set({
      name,
    });
  },
}));
