import { Lens, lens } from '../lens'

import { prop } from '../prop'
import { update } from '../update'

export function lensIndex<A>(index: number): Lens<ArrayLike<A>, A> {
  return lens(prop(index), update(index))
}
