import { RepeatArity2 } from './types'
import { curry2 } from '@typed/curry'

export const repeat: RepeatArity2 = curry2(
  function repeat<A>(value: A, amount: number): ReadonlyArray<A> {
    const list = Array(amount)

    for (let i = 0; i < amount; ++i)
      list[i] = value

    return list
  },
)
