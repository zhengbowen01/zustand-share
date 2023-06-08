import { useState, createContext, useContext } from "react";
import type { PropsWithChildren } from "react";

interface State {
  name: string;
  age: number;
  changeName: (newName: string) => void;
  changeAge: (newAge: number) => void;
}

const OverallContext = createContext<State>({
  name: "zhangsan",
  changeName: () => null,
  age: 20,
  changeAge: () => null,
});

export function useOverallContext() {
  return useContext(OverallContext);
}

export default function OverallContextProvider(props: PropsWithChildren<{}>) {
  const { children } = props;
  const [name, changeName] = useState("zhangsan");
  const [age, changeAge] = useState(20);

  return (
    <OverallContext.Provider value={{ name, age, changeAge, changeName }}>
      {children}
    </OverallContext.Provider>
  );
}
