import { Either } from '@typed/Either'
import { Future } from '@typed/Future'
import { Maybe } from '@typed/Maybe'

export type Chain = {
  <A, B>(f: (value: A, index: number) => ArrayLike<B>, list: ArrayLike<A>): ReadonlyArray<B>

  <A, B>(f: (value: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: (value: A) => PromiseLike<B>, promise: PromiseLike<A>): Promise<B>
  <A, B, C>(f: (value: B) => Either<A, C>, either: Either<A, B>): Either<A, C>
  <A, B, C>(f: (value: B) => Future<A, C>, future: Future<A, B>): Future<A, C>

  <A, B>(f: (value: A, index: number) => ArrayLike<B>): (list: ArrayLike<A>) => ReadonlyArray<B>
  <A, B>(f: (value: A) => Maybe<B>): (maybe: Maybe<A>) => Maybe<B>
  <A, B>(f: (value: A) => PromiseLike<B>): (promise: PromiseLike<A>) => Promise<B>
  <A, B, C>(f: (value: A) => Either<A, C>): (either: Either<A, B>) => Either<A, C>
  <A, B, C>(f: (value: A) => Future<A, C>): (future: Future<A, B>) => Future<A, C>
}
