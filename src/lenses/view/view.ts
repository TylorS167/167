import { Lens } from '../types'
import { curry2 } from '../../function/curry/curry2'

export const view: ViewFn =
  curry2(<A extends Object, B extends A[keyof A]>(lens: Lens<A, B>, obj: A): B => lens.view(obj))

export interface ViewFn {
  <A extends Object, B extends A[keyof A]>(lens: Lens<A, B>, obj: A): B
  <A extends Object, B extends A[keyof A]>(lens: Lens<A, B>): (obj: A) => B
}
