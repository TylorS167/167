import { Lens } from '../lens'
import { Maybe } from '@typed/maybe'
import { flip } from '../flip'
import { invoker } from '../invoker'

export const view: View = (flip(invoker(1, 'view')) as any) as View

export type View = {
  <A, B>(lens: Lens<A, B>, obj: A): Maybe<B>
  <A, B>(lens: Lens<A, B>): (obj: A) => Maybe<B>
}
