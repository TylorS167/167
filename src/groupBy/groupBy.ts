import { List, StrMap } from '../types'

import { GroupBy } from './types'
import { curry2 } from '../curry'

/**
 * Groups a list by keys returned by applying the provided function to each 
 * item.
 * @name groupBy<Keys extends string, A>(f: Arity1<A, Keys>, list: List<A>): StrMap<Keys, List<A>>
 */
export const groupBy: GroupBy = curry2(__groupBy)

function __groupBy<Keys extends string, A>(
  f: (value: A) => Keys,
  list: List<A>
): StrMap<Keys, List<A>> {
  const itemCount = list.length
  const strMap = {} as Record<Keys, Array<A>>

  for (let i = 0; i < itemCount; ++i) {
    const value = list[i]
    const key = f(value)

    if (strMap[key]) strMap[key].push(value)
    else strMap[key] = [value]
  }

  return strMap
}
