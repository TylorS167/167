import { Lens } from '../types'
import { curry2 } from '../../function/curry/curry2'

export const view: ViewFn =
  curry2(<A, B>(lens: Lens<A, B>, obj: A): B => lens.view(obj))

export interface ViewFn {
  <A, B>(lens: Lens<A, B>, obj: A): B
  <A, B>(lens: Lens<A, B>): (obj: A) => B
}
