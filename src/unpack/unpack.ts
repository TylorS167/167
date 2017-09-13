import { Either, fromLeft, fromRight, isLeft } from '../Either'

import { Arity1 } from '../types'
import { Unpack } from './types'
import { curry3 } from '../curry'

/**
 * Extracts the value from an `Either` applying function `f` if the `Either<A, B>` is 
 * `Left<A>` or function `g` if `Right<B>`.
 * @name unpack<A, B, C>(f: Arity1<A, C>, g: Arity1<B, C>, either: Either<A, B>): C
 */
export const unpack: Unpack = curry3(__unpack)

function __unpack<A, B, C>(f: Arity1<A, C>, g: Arity1<B, C>, either: Either<A, B>): C {
  return isLeft(either) ? f(fromLeft(either)) : g(fromRight(either))
}
