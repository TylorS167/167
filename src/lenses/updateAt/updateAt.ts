import { Lens } from '../types'
import { curry3 } from '../../function/curry/curry3'

export const updateAt: UpdateAtArity3 = curry3(
  function updateAt<A extends object, B extends A[keyof A]>(
    lens: Lens<A, B>,
    f: (value: B) => B,
    obj: A): A
  {
    return lens.updateAt(f, obj)
  },
)

export interface UpdateAtArity3 {
  <A, B>(lens: Lens<A, B>, f: (value: B) => B, obj: A): A
  <A, B>(lens: Lens<A, B>, f: (value: B) => B): UpdateAtArity1<A>
  <A, B>(lens: Lens<A, B>): UpdateAtArity2<A, B>
}

export interface UpdateAtArity2<A, B> {
  (f: (value: B) => B, obj: A): A
  (f: (value: B) => B): UpdateAtArity1<A>
}

export type UpdateAtArity1<A> = (obj: A) => A
