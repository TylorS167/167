import { PropArity2 } from './types'
import { curry2 } from '@typed/curry'

export const prop: PropArity2 = curry2(<A>(key: keyof A, obj: A): A[typeof key] => obj[key])
