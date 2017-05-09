import { BothArity2 } from './types'
import { apply } from '../../function/apply'
import { curry2 } from '../../function/curry/curry2'

export const both: BothArity2 = curry2(<F extends (...args: Array<any>) => boolean>(f: F, g: F): F =>
  function both(...args: Array<any>) {
    return apply(f, args) === true && apply(g, args) === true
  } as F,
)
