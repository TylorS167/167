import { Lens } from '../lens'
import { Maybe } from '@typed/maybe'
import { curry3 } from '../curry'

export const updateAt: UpdateAt = curry3(function<A, B>(
  lens: Lens<A, B>,
  f: (value: Maybe<B>) => Maybe<B>,
  obj: A
): A {
  return lens.updateAt(f, obj)
})

export type UpdateAt = {
  <A, B>(lens: Lens<A, B>, f: (value: Maybe<B>) => Maybe<B>, obj: A): A
  <A, B>(lens: Lens<A, B>, f: (value: Maybe<B>) => Maybe<B>): (obj: A) => A
  <A, B>(lens: Lens<A, B>): (f: (value: Maybe<B>) => Maybe<B>) => (obj: A) => A
  <A, B>(lens: Lens<A, B>): (f: (value: Maybe<B>) => Maybe<B>, obj: A) => A
}
