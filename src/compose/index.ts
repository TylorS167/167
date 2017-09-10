import { Compose } from './types'
import { apply } from '../apply'
import { pipe } from '../pipe'
import { reverse } from '../reverse'

export const compose: Compose = (...fns: Array<(value: any) => any>) => apply(reverse(fns), pipe)
