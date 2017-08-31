import { ReduceArity3 } from './types'
import { curry3 } from '../../function/curry/curry3'

/**
 * Fold over values contained in a list.
 * @name reduce<A, B>(f: Reducer<A, B>, seed: B, list: Array<A>): B
 */
export const reduce: ReduceArity3 = curry3(function reduce<A, B>(
  f: (acc: B, value: A, index: number) => B,
  seed: B,
  list: Array<A>
) {
  const length = list.length
  let acc: B = seed

  for (let i = 0; i < length; ++i) acc = f(acc, list[i], i)

  return acc
})
