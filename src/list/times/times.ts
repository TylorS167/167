import { TimesArity2 } from './types'
import { curry2 } from '@typed/curry'

export const times: TimesArity2 = curry2(<A>(f: (n: number) => A, n: number) => {
  const list = Array(n)

  for (let i = 0; i < n; ++i)
    list[i] = f(i)

  return list
})
