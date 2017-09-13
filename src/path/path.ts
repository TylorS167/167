import { List } from '../types'
import { Path } from './types'
import { curry2 } from '../curry'
import { lensPath } from '../lensPath'

/**
 * Given a path to a value and an object it returns the values contained
 * at that path.
 * @name path<A, B>(path: List<string>, obj: A): Maybe<B>
 */
export const path: Path = curry2(function(path: List<string>, obj: any): any {
  return lensPath<any, any>(path).view(obj)
})
