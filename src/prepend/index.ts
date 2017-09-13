import { List } from '../types'
import { curry2 } from '../curry'
import { decrement } from '../decrement'
import { increment } from '../increment'
import { length } from '../length'

/**
 * Puts at value at the beginning of a `List`.
 * @name prepend<A>(value: A, list: List<A>): List<A>
 */
export const prepend = curry2(__prepend)

function __prepend<A>(value: A, list: List<A>): List<A> {
  const itemCount = increment(length(list))
  const newList = Array(itemCount)

  newList[0] = value

  for (let i = 1; i < itemCount; ++i) newList[i] = list[decrement(i)]

  return newList
}
