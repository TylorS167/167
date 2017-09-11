import { Comparator, List } from '../types'

import { arrayFrom } from '../arrayFrom'
import { curry2 } from '../curry'

export const sort: Sort = curry2(__sort)

export type Sort = {
  <A>(comparator: Comparator<A>, list: List<A>): List<A>
  <A>(comparator: Comparator<A>): (list: List<A>) => List<A>
}

function __sort<A>(comparator: Comparator<A>, list: List<A>): List<A> {
  return arrayFrom(list)
    .slice(0)
    .sort(comparator)
}
