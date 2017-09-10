import { Lens, lens } from '../lens'

import { List } from '../types'
import { prop } from '../prop'
import { update } from '../update'

/**
 * Creates an index for a List.
 * @name lensIndex<A>(index: number): Lens<List<A>, A>
 */
export function lensIndex<A>(index: number): Lens<List<A>, A> {
  return lens(prop(index), update(index))
}
