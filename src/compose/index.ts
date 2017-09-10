import { Compose } from './types'
import { pipe } from '../pipe'
import { reverse } from '../reverse'

export const compose: Compose = <A, B>(...fns: Array<(value: any) => any>) =>
  pipe<A, B>(...reverse(fns))
