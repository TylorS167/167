import { RemoveArity3 } from './types'
import { copy } from '../copy'
import { curry3 } from '@typed/curry'

export const remove: RemoveArity3 = curry3(
  function remove<A>(index: number, amount: number, list: Array<A>): ReadonlyArray<A> {
    const length = list.length

    if (amount === 0 || length === 0)
      return list

    if (index === 0 && amount >= length)
      return []

    const newList = Array(length - Math.abs(index))

    for (let i = 0; i < index; ++i)
      newList[i] = list[i]

    for (let i = index + amount; i < length; ++i)
      newList[i - amount] = list[i]

    return newList
  },
)
