import { curry2 } from '../curry'

export const greaterThan: GreaterThan = curry2(<A>(left: A, right: A) => left > right)

export type GreaterThan = {
  <A>(left: A, right: A): boolean
  <A>(left: A): (right: A) => boolean
}
