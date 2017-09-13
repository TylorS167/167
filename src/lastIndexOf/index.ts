import { Index, List } from '../types'

import { Maybe } from '../Maybe'
import { curry2 } from '../curry'
import { equals } from '../equals'
import { findLastIndex } from '../findLastIndex'

export const lastIndexOf: LastIndexOf = curry2(__lastIndexOf)

export type LastIndexOf = {
  <A>(value: A, list: List<A>): Maybe<Index>
  <A>(value: A): (list: List<A>) => Maybe<Index>
}

function __lastIndexOf<A>(value: A, list: List<A>): Maybe<Index> {
  return findLastIndex(equals(value), list)
}
