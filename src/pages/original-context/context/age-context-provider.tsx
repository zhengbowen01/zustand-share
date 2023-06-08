import { createContext, useContext, useState } from "react";
import type { PropsWithChildren } from "react";

interface State {
  age: number;
  changeAge: (newAge: number) => void;
}

const AgeContext = createContext<State>({
  age: 20,
  changeAge: () => null,
});

export function useAgeContext() {
  return useContext(AgeContext);
}

export default function AgeContextProvider(props: PropsWithChildren<{}>) {
  const { children } = props;
  const [age, changeAge] = useState(20);

  return (
    <AgeContext.Provider value={{ age, changeAge }}>
      {children}
    </AgeContext.Provider>
  );
}
