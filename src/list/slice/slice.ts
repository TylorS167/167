import { SliceArity3 } from './types'
import { curry3 } from '../../function/curry'

export const slice: SliceArity3 = curry3(
  function <A>(start: number, end: number, list: Array<A>): ReadonlyArray<A> {
    if (typeof list === 'string')
      return (list as any).slice(start, end)

    if (end <= start)
      return []

    const newLength = end - start
    const newList = Array(newLength)

    for (let i = start; i < start + newLength; ++i)
      newList[i - start] = list[i]

    return newList
  },
)
