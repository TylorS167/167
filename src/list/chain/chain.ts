import { ChainArity2 } from './types'
import { curry2 } from '@typed/curry'

/**
 * chain maps a function over a list and concatenates the results.
 * chain is also known as flatMap in some libraries
 *
 * Dispatches to the chain method of the second argument, if present,
 * according to the FantasyLand Chain spec.
 */
export const chain: ChainArity2 = curry2(
  function chain<A, B>(f: (a: A) => Array<B>, list: any): any {
    const length = list.length
    const newList: Array<B> = []

    for (let i = 0; i < length; ++i)
    {
      newList.push.apply(newList, f(list[i]))
    }

    return newList
  },
)
