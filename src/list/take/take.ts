import { TakeArity2 } from './types'
import { curry2 } from '../../function/curry'
import { slice } from '../slice'

export const take: TakeArity2 =
  curry2(<A>(n: number, list: Array<A>) => slice(0, n < 0 ? Infinity : n, list))
