import { List } from '../types'
import { Nothing } from '../Maybe'
import { curry2 } from '../curry'
import { slice } from '../slice'

/**
 * Drops the first `n` items from a `List`.
 * @name drop<A>(quantity: number, list: List<A>): List<A>
 */
export const drop: Drop = curry2(__drop)

export type Drop = {
  <A>(quanity: number, list: List<A>): List<A>
  <A>(quanity: number): (list: List<A>) => List<A>
}

function __drop<A>(quanity: number, list: List<A>): List<A> {
  return slice(quanity, Nothing, list)
}
