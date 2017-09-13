import { Either } from '@typed/Either'
import { List } from '../types'
import { Maybe } from '@typed/Maybe'

export type Chain = {
  <A, B>(f: (value: A, index: number) => List<B>, list: List<A>): List<B>

  <A, B>(f: (value: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: (value: A) => PromiseLike<B>, promise: PromiseLike<A>): Promise<B>
  <A, B, C>(f: (value: B) => Either<A, C>, either: Either<A, B>): Either<A, C>

  <A, B>(f: (value: A, index: number) => List<B>): (list: List<A>) => List<B>
  <A, B>(f: (value: A) => Maybe<B>): (maybe: Maybe<A>) => Maybe<B>
  <A, B>(f: (value: A) => PromiseLike<B>): (promise: PromiseLike<A>) => Promise<B>
  <A, B, C>(f: (value: A) => Either<A, C>): (either: Either<A, B>) => Either<A, C>
}
