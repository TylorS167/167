import { Equality } from '../../function/types'
import { curry2 } from '../../function/curry'

export const lt: Equality = curry2((a: any, b: typeof a) => a < b)
export const lte: Equality = curry2((a: any, b: typeof a) => a <= b)
export const gt: Equality = curry2((a: any, b: typeof a) => a > b)
export const gte: Equality = curry2((a: any, b: typeof a) => a >= b)
