import type { StateCreator } from "zustand";

export default function logger<State>(
  createState: StateCreator<State>
): StateCreator<State> {
  return (set, get, api) => {
    api.setState = (...args) => {
      console.log("prev state: ", get());
      set(...args);
      console.log("next state: ", get());
    };
    return createState(api.setState, get, api);
  };
}
