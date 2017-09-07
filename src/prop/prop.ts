import { PropArity2 } from './types'
import { curry2 } from '../curry'

/**
 * Returns the value of a property from an object.
 * @name prop<A, K extends keyof A = K>(key: K, obj: A): A[K]
 */
export const prop: PropArity2 = curry2(<A, K extends keyof A>(key: K, obj: A): A[K] => obj[key])
