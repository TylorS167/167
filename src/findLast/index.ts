import { Index, List, Predicate } from '../types'
import { Maybe, map } from '@typed/Maybe'

import { curry2 } from '../curry'
import { findLastIndex } from '../findLastIndex'
import { flip } from '../flip'
import { prop } from '../prop'

/**
 * Find the last value contained in a list.
 * @name findLast<A>(predicate: Predicate<A>, list: List<A>): Maybe<A>
 */
export const findLast: FindLast = curry2(__findLast)

export type FindLast = {
  <A>(predicate: Predicate<A>, list: List<A>): Maybe<A>
  <A>(predicate: Predicate<A>): (list: List<A>) => Maybe<A>
}

const propFlipped: <A>(list: List<A>) => (index: Index) => A = flip(prop)

function __findLast<A>(predicate: Predicate<A>, list: List<A>): Maybe<A> {
  return map(propFlipped(list), findLastIndex(predicate, list))
}
