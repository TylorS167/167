import { FlattenArity1 } from './types'
import { append } from '../append'
import { concat } from '../concat'
import { isArrayLike } from '../isArrayLike'
import { reduce } from '../reduce'

/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 */
export const flatten: FlattenArity1 = function flatten<A>(list: Array<A>): ReadonlyArray<A> {
  return reduce<A | ReadonlyArray<A>, ReadonlyArray<A>>(flattenReducer, [] as Array<A>, list)
} as FlattenArity1

function flattenReducer<A>(acc: Array<A>, value: A | Array<A>): ReadonlyArray<A> {
  return isArrayLike(value)
    ? concat(acc, flatten<A>(value))
    : append(value, acc)
}
