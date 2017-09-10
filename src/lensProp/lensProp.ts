import { Lens, lens } from '../lens'

import { prop } from '../prop'
import { set } from '../set'

/**
 * Creates a lens that operates on an object's property.
 * @name lensProp<A, K extends keyof A>(key: K): Lens<A, A[K]>
 */
export const lensProp = <A, K extends keyof A = keyof A>(key: K): Lens<A, A[K]> =>
  lens(prop(key), set(key))
