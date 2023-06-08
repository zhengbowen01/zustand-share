import { createContext, useState, useContext } from "react";
import type { PropsWithChildren } from "react";

interface State {
  name: string;
  changeName: (newName: string) => void;
}

const NameContext = createContext<State>({
  name: "zhangsan",
  changeName: () => null,
});

export function useNameContext() {
  return useContext(NameContext);
}

export default function NameContextProvider(props: PropsWithChildren<{}>) {
  const { children } = props;
  const [name, changeName] = useState("zhangsan");

  return (
    <NameContext.Provider value={{ name, changeName }}>
      {children}
    </NameContext.Provider>
  );
}
