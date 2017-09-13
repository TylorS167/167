import { Index, List } from '../types'

import { IndexOf } from './types'
import { Maybe } from '../Maybe'
import { curry2 } from '../curry'
import { equals } from '../equals'
import { findIndex } from '../findIndex'

export const indexOf: IndexOf = curry2(__indexOf)

function __indexOf<A>(value: A, list: List<A>): Maybe<Index> {
  return findIndex(equals(value), list)
}
