import { ArityN } from '../types'
import { CallFn } from './types'
import { apply } from '../apply'

export const call: CallFn =
  <R>(f: ArityN<R>, ...args: Array<any>) => apply<R>(f, args)
