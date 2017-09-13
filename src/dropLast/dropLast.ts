import { List } from '../types'
import { Maybe } from '../Maybe'
import { curry2 } from '../curry'
import { slice } from '../slice'

export const dropLast: DropLast = curry2(__dropLast)

export type DropLast = {
  <A>(quanity: number, list: List<A>): List<A>
  <A>(quanity: number): (list: List<A>) => List<A>
}

function __dropLast<A>(quanity: number, list: List<A>): List<A> {
  return slice(0, Maybe.of(list.length - quanity), list)
}
