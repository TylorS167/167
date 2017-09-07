import { InvokerFn } from './types'
import { curryN } from '../curryN'

export const invoker: InvokerFn = <O>(arity: number, method: keyof O) =>
  curryN((arity + 1) as any, function() {
    const target = arguments[arity]

    return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity))
  })
