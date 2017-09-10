import { List } from '../types'
import { curry2 } from '../curry'
import { length } from '../length'

export const append: Append = curry2(__append)

export type Append = {
  <A>(value: A, list: List<A>): List<A>
  <A>(value: A): (list: List<A>) => List<A>
}

function __append<A>(value: A, list: List<A>): List<A> {
  const itemCount = length(list)
  const newList = Array(itemCount + 1)

  for (let i = 0; i < itemCount; ++i) newList[i] = list[i]

  newList[itemCount] = value

  return newList
}
