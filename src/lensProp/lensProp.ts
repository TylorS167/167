import { Lens, lens } from '../lens'

import { prop } from '../prop'
import { set } from '../set'

export const lensProp = <A, K extends keyof A = keyof A>(key: K): Lens<A, A[K]> =>
  lens(prop(key), set(key))
