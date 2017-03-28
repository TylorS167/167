import { NoneArity2 } from './types'
import { curry2 } from '@typed/curry'

export const none: NoneArity2 = curry2(
  function none<A>(f: (a: A) => boolean, list: Array<A>): boolean {
    const length = list.length

    for (let i = 0; i < length; ++i)
      if (f(list[i]))
        return false

    return true
  },
)
