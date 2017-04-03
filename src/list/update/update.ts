import { UpdateArity3 } from './types'
import { curry3 } from '../../function/curry'

export const update: UpdateArity3 = curry3(
  function update<A>(index: number, value: A, list: Array<A>): ReadonlyArray<A> {
    const length = list.length

    if (length === 0 || index < 0 || index >= length)
      return list

    const newList = Array(length)

    for (let i = 0; i < length; ++i)
      if (i === index)
        newList[i] = value
      else
        newList[i] = list[i]

    return newList
  },
)
