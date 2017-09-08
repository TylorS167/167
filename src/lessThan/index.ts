import { curry2 } from '../curry'

/**
 * Compares two values using `<`
 * @name lessThan<A>(left: A, right: A): boolean
 */
export const lessThan: LessThan = curry2(<A>(left: A, right: A) => left < right)

export type LessThan = {
  <A>(left: A, right: A): boolean
  <A>(left: A): (right: A) => boolean
}
