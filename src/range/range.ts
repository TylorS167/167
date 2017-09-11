import { List } from '../types'
import { curry2 } from '../curry'

/**
 * Creates a `List` that contains the numbers `from` to the 1 less than the
 * number `to`.
 * @name range(from: number, to: number): List<number>
 */
export const range: Range = curry2(__range)

export type Range = {
  (from: number, to: number): List<number>
  (from: number): (to: number) => List<number>
}

function __range(from: number, to: number): List<number> {
  const length = to - from
  const list = Array(length)

  for (let i = 0; i < length; ++i) list[i] = i + from

  return list
}
