import { Curry2 } from '../types'
import { invoker } from '../invoker'

export const endsWith: Curry2<string, string, boolean> = invoker<string, string, boolean>(
  1,
  'endsWith'
)
export const includes = invoker<string, string, boolean>(1, 'includes')
export const startsWith = invoker<string, string, boolean>(1, 'startsWith')
export const trim = invoker<string, string>(0, 'trim')
export const split = invoker<string, string | RegExp, string>(1, 'split')
