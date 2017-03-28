import { SplitAtArity2 } from './types'
import { curry2 } from '@typed/curry'
import { slice } from '../slice'

export const splitAt: SplitAtArity2 = curry2(<A>(index: number, list: Array<A>) =>
  [ slice(0, index, list), slice(index, list.length, list) ])
