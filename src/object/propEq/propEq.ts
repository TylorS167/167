import { PropEqArity3 } from './types'
import { curry3 } from '../../function/curry'

export const propEq: PropEqArity3 = curry3(
  function <O>(key: keyof O, value: O[typeof key], obj: O): boolean {
    return obj[key] === value
  },
)
