import { curry2 } from '../curry'

/**
 * Applies `>=` to 2 values.
 * @name greaterThanOrEqual<A>(left: A, right: A): boolean
 */
export const greaterThanOrEqual: GreaterThanOrEqual = curry2(
  <A>(left: A, right: A) => left >= right
)

export type GreaterThanOrEqual = {
  <A>(left: A, right: A): boolean
  <A>(left: A): (right: A) => boolean
}
