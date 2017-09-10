import { Reverse } from './types'
import { length } from '../length'

export const reverse: Reverse = function reverse<A>(list: ArrayLike<A>): ReadonlyArray<A> {
  const itemCount = length(list)
  const reversedList = Array(itemCount)

  for (let index = 0; index < itemCount; ++index) reversedList[index] = list[itemCount - 1 - index]

  return reversedList
}
