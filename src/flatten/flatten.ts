import { Flatten } from './types'
import { isArrayLike } from '../__internal__'
import { reduce } from '../reduce'

/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 */
export const flatten: Flatten = function flatten<A>(list: ArrayLike<any>): ReadonlyArray<A> {
  return reduce<A | Array<A>, ReadonlyArray<A>>(flattenReducer, [], list)
}

function flattenReducer<A>(acc: Array<A>, value: A | ArrayLike<A>): ReadonlyArray<A> {
  if (isArrayLike(value)) acc.push(...flatten(value))
  else acc.push(value)

  return acc
}
