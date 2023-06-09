type StateCreator<State> = (
  setState: SetState<State>,
  getState: GetState<State>,
  api: Store<State>
) => State;

type Selector<State, T> = (state: State) => T

type GetState<State> = () => State;
type SetState<State> = (
  partialStateOrFn: Partial<State> | ((state: State) => Partial<State> | void)
) => void;
type Listener<State> = (newState: State, previousState: State) => void;
type Subscribe<State> = (listener: Listener<State>) => () => void;

interface Store<State> {
  getState: GetState<State>;
  setState: SetState<State>;
  subscribe: Subscribe<State>;
}

type IsEuqal = (a: any, b: any) => boolean;

export type {
  StateCreator,
  Selector,
  GetState,
  SetState,
  Listener,
  Subscribe,
  Store,
  IsEuqal,
};
