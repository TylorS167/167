import { WithoutArity2 } from './types'
import { curry2 } from '../../function/curry'

export const without: WithoutArity2 = curry2(
  function without<A>(values: Array<A>, list: Array<A>): ReadonlyArray<A> {
    const length = list.length
    const set = new Set(values)
    const newList = []

    for (let i = 0; i < length; ++i)
    {
      const item = list[i]

      if (!set.has(list[i]))
        newList.push(list[i])
    }

    return newList
  },
)
