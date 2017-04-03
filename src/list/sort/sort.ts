import { Comparator } from '../../function'
import { SortArity2 } from './types'
import { curry2 } from '../../function/curry'

export const sort: SortArity2 =
  curry2(<A>(c: Comparator<A>, list: Array<A>) => Array.prototype.slice.call(list, 0).sort(c))
