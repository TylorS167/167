import { curry2 } from '../curry'

export const lessThanOrEqual: LessThanOrEqual = curry2(<A>(left: A, right: A) => left <= right)

export type LessThanOrEqual = {
  <A>(left: A, right: A): boolean
  <A>(left: A): (right: A) => boolean
}
