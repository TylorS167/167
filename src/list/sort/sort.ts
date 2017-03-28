import { Comparator, SortArity2 } from './types'

import { curry2 } from '@typed/curry'

export const sort: SortArity2 =
  curry2(<A>(c: Comparator<A>, list: Array<A>) => Array.prototype.slice.call(list, 0).sort(c))
