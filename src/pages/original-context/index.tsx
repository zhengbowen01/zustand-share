import InfoContextProvider from "./context";
import OverallContextProvider from "./context/overall-context-provider";
import AgeChanger from "./age-changer";
import NameChanger from "./name-changer";

export default function OriginalContext() {
  return (
    <>
      {/* <InfoContextProvider>
        <NameChanger />
        <AgeChanger />
      </InfoContextProvider> */}

      <OverallContextProvider>
        <NameChanger/>
        <AgeChanger/>
      </OverallContextProvider>
    </>
  );
}
