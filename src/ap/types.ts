import { Arity1, Either, Future, List, Maybe } from '../'

export type Ap = {
  <A, B>(fn: List<Arity1<A, B>>, list: List<A>): List<B>
  <A, B>(fn: Maybe<Arity1<A, B>>, maybe: Maybe<A>): Maybe<B>
  <A, B>(fn: PromiseLike<Arity1<A, B>>, promise: PromiseLike<A>): Promise<B>
  <A, B, C>(fn: Either<A, Arity1<B, C>>, either: Either<A, B>): Either<A, C>
  <A, B, C>(fn: Future<A, Arity1<B, C>>, future: Future<A, B>): Future<A, C>

  <A, B>(fn: List<Arity1<A, B>>): (list: List<A>) => List<B>
  <A, B>(fn: Maybe<Arity1<A, B>>): (maybe: Maybe<A>) => Maybe<B>
  <A, B>(fn: PromiseLike<Arity1<A, B>>): (promise: PromiseLike<A>) => Promise<B>
  <A, B, C>(fn: Either<A, Arity1<B, C>>): (either: Either<A, B>) => Either<A, C>
  <A, B, C>(fn: Future<A, Arity1<B, C>>): (future: Future<A, B>) => Future<A, C>
}
