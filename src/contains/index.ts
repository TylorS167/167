import { List } from '../types'
import { always } from '../always'
import { curry2 } from '../curry'
import { fromMaybe } from '../Maybe'
import { indexOf } from '../indexOf'
import { map } from '../map'

export const contains: Contains = curry2(__contains)

export type Contains = {
  <A>(value: A, list: List<A>): boolean
  <A>(value: A): (list: List<A>) => boolean
}

function __contains<A>(value: A, list: List<A>): boolean {
  return fromMaybe(false, map(always(true), indexOf(value, list)))
}
