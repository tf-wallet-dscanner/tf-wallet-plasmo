import type {
  GetState,
  SetState,
  State,
  StateCreator,
  StoreApi,
} from 'zustand';

export type CommonStateCreator<S extends State> = StateCreator<
  S,
  SetState<S>,
  GetState<S>,
  StoreApi<S>
>;

export { default as useCounterStore } from './counter';
