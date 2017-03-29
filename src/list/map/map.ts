import { MapArity2 } from './types'
import { curry2 } from '@typed/curry'

export const map: MapArity2 = curry2(
  function map<A, B>(f: (a: A, index?: number) => B, list: Array<A>): Array<B> {
    const length = list.length
    const newList = Array(length)

    for (let i = 0; i < length; ++i)
      newList[i] = f(list[i], i)

    return newList
  },
)
