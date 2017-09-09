import { Maybe } from '@typed/maybe'

export interface Lens<A, B> {
  view(object: A): Maybe<B>
  updateAt(f: (previousValue: Maybe<B>) => Maybe<B>, object: A): A
}
