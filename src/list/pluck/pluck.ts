import { PluckArity2 } from './types'
import { curry2 } from '../../function/curry'
import { map } from '../map'
import { prop } from '../../object/prop'

export const pluck: PluckArity2 =
  curry2(<A>(key: keyof A, list: Array<A>) => map(prop<A>(key), list))
