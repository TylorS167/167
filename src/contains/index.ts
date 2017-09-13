import { List } from '../types'
import { always } from '../always'
import { curry2 } from '../curry'
import { fromMaybe } from '../Maybe'
import { indexOf } from '../indexOf'
import { map } from '../map'

/**
 * Returns true if a list contains a value, false otherwise.
 * @name contains<A>(value: A, list: List<A>): boolean
 */
export const contains: Contains = curry2(__contains)

export type Contains = {
  <A>(value: A, list: List<A>): boolean
  <A>(value: A): (list: List<A>) => boolean
}

function __contains<A>(value: A, list: List<A>): boolean {
  return fromMaybe(false, map(always(true), indexOf(value, list)))
}
