import { Flip } from './types'
import { apply } from '../apply'
import { curry } from '../curry'

export const flip: Flip = function flip<A, B, C>(f: (a: A, b: B, ...args: Array<any>) => C) {
  return curry(function(b: B, a: A, ...args: Array<any>): C {
    return apply([a, b, ...args], f)
  })
}
