import { AscendArity3 } from './types'
import { curry3 } from '@typed/curry'

export const ascend: AscendArity3 = curry3(
  function ascend<A, B>(f: (a: A) => B, a: A, b: A): 0 | 1 | -1 {
    const aa = f(a)
    const bb = f(b)

    if (aa < bb)
      return - 1

    if (aa > bb)
      return 1

    return 0
  },
)
