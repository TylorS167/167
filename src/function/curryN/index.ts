import { ArityN } from '../types'
import { CurryNFn } from './types'
import { apply } from '../apply'
import { curry2 } from '../curry'

export const curryN: CurryNFn =
  curry2((arity: number, f: ArityN<any>) => curriedN(arity, f, []))

function curriedN(arity: number, f: ArityN<any>, previousArgs: Array<any>) {
  return function(...args: Array<any>) {
    const concatArgs = previousArgs.concat(args)

    if (args.length >= arity)
      return apply(f, concatArgs)

    return curriedN(arity, f, concatArgs)
  }
}
