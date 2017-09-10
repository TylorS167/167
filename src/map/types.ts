import { Either } from '@typed/Either'
import { Future } from '@typed/Future'
import { List } from '../types'
import { Maybe } from '@typed/Maybe'

export type Map = {
  <A, B>(f: (value: A, index: number) => B, list: List<A>): List<B>
  <A, B>(f: (value: A) => B, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: (value: A) => B, promise: PromiseLike<A>): Promise<B>
  <A, B, C>(f: (value: B) => C, either: Either<A, B>): Either<A, C>
  <A, B, C>(f: (value: B) => C, future: Future<A, B>): Future<A, C>

  <A, B>(f: (value: A, index: number) => B): MapArity1<A, B>
}

export type MapArity1<A, B> = {
  (list: List<A>): List<B>
  (maybe: Maybe<A>): Maybe<B>
  (promise: Promise<A>): Promise<B>
  <C>(either: Either<C, A>): Either<C, B>
  <C>(future: Future<C, A>): Future<C, B>
}
