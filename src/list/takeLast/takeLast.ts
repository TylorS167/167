import { TakeLastArity2 } from './types'
import { curry2 } from '@typed/curry'
import { drop } from '../drop'

export const takeLast: TakeLastArity2 =
  curry2(<A>(n: number, list: Array<A>) => drop(n >= 0 ? list.length - n : 0, list))
