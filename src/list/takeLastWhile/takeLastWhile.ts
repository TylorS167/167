import { TakeLastWhileArity2 } from './types'
import { curry2 } from '@typed/curry'
import { slice } from '../slice'

export const takeLastWhile: TakeLastWhileArity2 = curry2(_takeLastWhile)

function _takeLastWhile<A>(f: (a: A) => boolean, list: Array<A>): ReadonlyArray<A> {
  let index = list.length - 1

  while (index >= 0 && f(list[index]))
    index -= 1

  return slice(index + 1, Infinity, list)
}
