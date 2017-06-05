import { Conditional } from '../condOr'
import { Maybe } from '../../maybe'

export interface CondArity2 {
  <A, B>(predicates: Array<Conditional<A, B>>, value: A): Maybe<B>
  <A, B>(predicates: ArrayLike<Conditional<A, B>>, value: A): Maybe<B>
  <A, B>(predicates: ReadonlyArray<Conditional<A, B>>, value: A): Maybe<B>

  <A, B>(predicates: Array<Conditional<A, B>>): CondArity1<A, B>
  <A, B>(predicates: ArrayLike<Conditional<A, B>>): CondArity1<A, B>
  <A, B>(predicates: ReadonlyArray<Conditional<A, B>>): CondArity1<A, B>
}

export interface CondArity1<A, B> {
  (value: A): Maybe<B>
}
