import { TakeWhileArity2 } from './types'
import { curry2 } from '../../function/curry'
import { slice } from '../slice'

export const takeWhile: TakeWhileArity2 = curry2(_takeWhile)

function _takeWhile<A>(f: (a: A) => boolean, list: Array<A>): ReadonlyArray<A> {
  const length = list.length
  let index = 0

  while (index <= length - 1 && f(list[index]))
    index += 1

  return slice(0, index, list)
}
