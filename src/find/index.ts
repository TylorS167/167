import { Index, List, Predicate } from '../types'
import { Maybe, map } from '@typed/Maybe'

import { curry2 } from '../curry'
import { findIndex } from '../findIndex'
import { flip } from '../flip'
import { prop } from '../prop'

/**
 * Find the value contained in a list.
 * @name find<A>(predicate: Predicate<A>, list: List<A>): Maybe<A>
 */
export const find: Find = curry2(__find)

export type Find = {
  <A>(predicate: (value: A) => boolean, list: List<A>): Maybe<A>
  <A>(predicate: (value: A) => boolean): (list: List<A>) => Maybe<A>
}

const propFlipped: <A>(list: List<A>) => (index: Index) => A = flip(prop)

function __find<A>(predicate: Predicate<A>, list: List<A>): Maybe<A> {
  return map(propFlipped(list), findIndex(predicate, list))
}
