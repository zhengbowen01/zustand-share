import type {
  StateCreator,
  Store,
  SetState,
  GetState,
  Subscribe,
  Listener,
} from "./types";

export function createStore<State>(
  createState: StateCreator<State>
): Store<State> {
  let state: State;

  const listeners = new Set<Listener<State>>();

  const getState: GetState<State> = () => state;
  const setState: SetState<State> = (partial) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    // 如果不是同一个对象才去更新
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = Object.assign({}, previousState, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };

  const subscribe: Subscribe<State> = (listener) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };

  const api: Store<State> = {
    getState,
    setState,
    subscribe
  };

  state = createState(setState, getState, api);
  return api;
}

export default createStore;
