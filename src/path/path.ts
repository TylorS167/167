import { List } from '../types'
import { Path } from './types'
import { curry2 } from '../curry'
import { lensPath } from '../lensPath'

/**
 * Given a path to a value it returns a Lens that operates on that value.
 * @name path<A, B>(path: List<string>, obj: A): Maybe<B>
 */
export const path: Path = curry2(function(path: List<string>, obj: any): any {
  return lensPath<any, any>(path).view(obj)
})
