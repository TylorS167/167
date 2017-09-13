import { Compose } from './types'
import { apply } from '../apply'
import { pipe } from '../pipe'
import { reverse } from '../reverse'

/**
 * Right-to-left function composition.
 * @name compose<A, B>(...fns: Array<Function>): (value: A) => B
 */
export const compose: Compose = (...fns: Array<(value: any) => any>) => apply(reverse(fns), pipe)
