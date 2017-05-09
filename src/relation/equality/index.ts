import { Equality } from '../../function/types'
import { curry2 } from '../../function/curry'

export const lt: Equality = curry2((a: any, b: typeof a) => b < a)
export const lte: Equality = curry2((a: any, b: typeof a) => b <= a)
export const gt: Equality = curry2((a: any, b: typeof a) => b > a)
export const gte: Equality = curry2((a: any, b: typeof a) => b >= a)
