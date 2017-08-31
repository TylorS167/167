import { curry2 } from '../'

export const prop: Prop = curry2(<A, K extends keyof A>(key: K, obj: A): A[K] => obj[key])

export interface Prop {
  <A, K extends keyof A>(key: K, obj: A): A[K]
  <A, K extends keyof A>(key: K): (obj: A) => A[K]
}
