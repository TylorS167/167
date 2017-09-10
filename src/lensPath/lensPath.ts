import { Lens } from '../lens'
import { LensPath } from './types'
import { List } from '../types'
import { apply } from '../apply'
import { lensProp } from '../lensProp'
import { map } from '../map'
import { pipeLenses } from '../pipeLenses'

/**
 * Given a path to a value it returns a Lens that operates on that value.
 * @name lensPath<A, B>(path: Array<string>): Lens<A, B>
 */
export const lensPath: LensPath = function(path: List<string>): Lens<any, any> {
  return apply(map(lensProp, path), pipeLenses)
}
