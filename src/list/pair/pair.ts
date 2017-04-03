import { PairArity2 } from './types'
import { curry2 } from '../../function/curry'

export const pair: PairArity2 = curry2(<A, B>(a: A, b: B) => [ a, b ])
