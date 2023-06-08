import NameContextProvider from "./name-context-provider";
import AgeContextProvider from "./age-context-provider";
import type { PropsWithChildren } from "react";

const ContextProviders = [NameContextProvider, AgeContextProvider];

export default function InfoContextProvider(props: PropsWithChildren<{}>) {
  const { children } = props;

  return (
    <>
      {ContextProviders.reduce(
        (memo, Current) => (
          <Current>{memo}</Current>
        ),
        children
      )}
    </>
  );
}

export * from "./age-context-provider";
export * from "./name-context-provider";
