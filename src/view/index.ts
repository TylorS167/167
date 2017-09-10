import { Lens } from '../lens'
import { Maybe } from '@typed/maybe'
import { curry2 } from '../curry'

/**
 * Uses a lenses to view a value contained in an object.
 * @name view<A, B>(lens: Lens<A, B>, obj: A): Maybe<B>
 */
export const view: View = curry2(function<A, B>(lens: Lens<A, B>, obj: A): Maybe<B> {
  return lens.view(obj)
})

export type View = {
  <A, B>(lens: Lens<A, B>, obj: A): Maybe<B>
  <A, B>(lens: Lens<A, B>): (obj: A) => Maybe<B>
}
