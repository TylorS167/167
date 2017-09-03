import { Curry10, Curry2, Curry3, Curry4, Curry5, Curry6, Curry7, Curry8, Curry9 } from '../types'

export interface InvokerFn {
  <O, R>(arity: 0, method: keyof O): (obj: O) => R
  <O, A, R>(arity: 1, method: keyof O): Curry2<A, O, R>
  <O, A, B, R>(arity: 2, method: keyof O): Curry3<A, B, O, R>
  <O, A, B, C, R>(arity: 3, method: keyof O): Curry4<A, B, C, O, R>
  <O, A, B, C, D, R>(arity: 4, method: keyof O): Curry5<A, B, C, D, O, R>
  <O, A, B, C, D, E, R>(arity: 5, method: keyof O): Curry6<A, B, C, D, E, O, R>
  <O, A, B, C, D, E, F, R>(arity: 6, method: keyof O): Curry7<A, B, C, D, E, F, O, R>
  <O, A, B, C, D, E, F, G, R>(arity: 7, method: keyof O): Curry8<A, B, C, D, E, F, G, O, R>
  <O, A, B, C, D, E, F, G, H, R>(arity: 8, method: keyof O): Curry9<A, B, C, D, E, F, G, H, O, R>
  <O, A, B, C, D, E, F, G, H, I, R>(arity: 9, method: keyof O): Curry10<
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    O,
    R
  >
}
