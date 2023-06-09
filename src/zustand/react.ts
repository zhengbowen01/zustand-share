import {
  useRef,
  useCallback,
  useSyncExternalStore,
  useLayoutEffect,
  useReducer,
} from "react";
import { createStore } from "./vanilla";
import type { StateCreator, Selector, Store, IsEuqal } from "./types";

function useSyncExternalStoreShim<State>(
  subscribe: any,
  getSnapshot: () => State
) {
  const getSnapshotRef = useRef(getSnapshot);
  getSnapshotRef.current = getSnapshot;
  const snapshotRef = useRef(getSnapshotRef.current());
  snapshotRef.current = getSnapshotRef.current();

  const [, forceUpdate] = useReducer(() => ({}), {});

  useLayoutEffect(() => {
    const unsubscribe = subscribe(() => {
      const newSnapshot = getSnapshotRef.current();
      if (!Object.is(newSnapshot, snapshotRef.current)) forceUpdate();
    });

    return unsubscribe;
  }, [subscribe]);

  return snapshotRef.current;
}

export function useStore<State, T>(
  store: Store<State>,
  selector: Selector<State, T> = (state) => state as any as T,
  isEqual: IsEuqal = (a, b) => a === b
) {
  const isEqualRef = useRef(isEqual);
  isEqualRef.current = isEqual;

  const lastSnanshotRef = useRef<State>();
  const lastSelectionRef = useRef<T>();

  const getSelection = useCallback(() => {
    const lastSelection = lastSelectionRef.current;
    if (lastSelection == null) {
      const nextSnapshot = store.getState();
      const nextSelection = selector(nextSnapshot);
      lastSelectionRef.current = nextSelection;
      lastSnanshotRef.current = nextSnapshot;
      return nextSelection;
    }
    const nextSnapshot = store.getState();
    const nextSelection = selector(nextSnapshot);
    if (Object.is(nextSnapshot, lastSnanshotRef.current)) {
      return lastSelection;
    }
    if (isEqualRef.current(lastSelection, nextSelection)) {
      return lastSelection;
    }
    lastSelectionRef.current = nextSelection;
    lastSnanshotRef.current = nextSnapshot;
    return nextSelection;
  }, [store, selector]);

  return useSyncExternalStoreShim(store.subscribe, getSelection);
}

export function create<State>(createState: StateCreator<State>) {
  // 创建 store
  const store = createStore(createState);

  // 返回 hook
  return <T>(selector?: Selector<State, T>, isEqual?: IsEuqal) =>
    useStore(store, selector, isEqual);
}
