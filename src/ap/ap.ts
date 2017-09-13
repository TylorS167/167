import { Arity1, List } from '../types'

import { Ap } from './types'
import { chain } from '../chain'
import { curry2 } from '../curry'
import { map } from '../map'

/**
 * Apply the function contained in an Applicative to the values contained
 * in another Applicative. Works with all data structures supported by `chain` and 
 * `map`.
 * @name ap<A, B>(fn: List<Arity1<A, B>>, values: List<A>): List<B>
 */
export const ap: Ap = curry2(__ap)

function __ap<A, B>(fn: List<Arity1<A, B>>, value: List<A>): List<B> {
  return chain(f => map(f, value), fn)
}
