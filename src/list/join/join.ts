import { JoinArity2 } from './types'
import { curry2 } from '../../function/curry'

export const join: JoinArity2 = curry2(
  function join<A>(separator: string, list: Array<A>): string {
    const length = list.length
    let str = ''

    for (let i = 0; i < length - 1; ++i)
      str += list[i] + separator

    str += list[length - 1]

    return str
  },
)
