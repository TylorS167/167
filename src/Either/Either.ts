import { Left, fromLeft } from './Left'
import { Right, fromRight } from './Right'

import { curry2 } from '../function/curry/curry2'
import { pipe } from '../function/pipe'

export type Either<A, B> = Left<A> | Right<B>

export namespace Either {
  export const of: <A, B>(value: B) => Either<A, B> = Right.of
  export const left: <A, B>(value: A) => Either<A, B> = Left.of

  export const isLeft = <A, B>(either: Either<A, B>): either is Left<A> =>
    either.hasOwnProperty('@167/Left')

  export const isRight = <A, B>(either: Either<A, B>): either is Right<B> =>
    either.hasOwnProperty('@167/Right')

  export const chain: EitherChain = curry2(function<A, B, C>(
    f: (value: B) => Either<A, C>,
    either: Either<A, B>
  ): Either<A, C> {
    return isLeft(either) ? either : f(fromRight(either))
  })

  export const chainLeft: EitherChainLeft = curry2(function<A, B, C>(
    f: (value: A) => Either<C, B>,
    either: Either<A, B>
  ): Either<C, B> {
    return isLeft(either) ? f(fromLeft(either)) : either
  })

  export const map: EitherMap = curry2(function<A, B, C>(
    f: (value: B) => C,
    either: Either<A, B>
  ): Either<A, C> {
    return chain<A, B, C>(pipe<B, C, Either<A, C>>(f, of), either)
  })

  export const mapLeft: EitherMapLeft = curry2(function<A, B, C>(
    f: (value: A) => C,
    either: Either<A, B>
  ): Either<C, B> {
    return chainLeft(pipe<A, C, Either<C, B>>(f, left), either)
  })

  export const ap: EitherAP = curry2(function<A, B, C>(
    fn: Either<A, (value: B) => C>,
    value: Either<A, B>
  ): Either<A, C> {
    return chain(f => map(f, value), fn)
  })
}

export const isLeft = Either.isLeft
export const isRight = Either.isRight

export const fromEither = <A, B>(either: Either<A, B>): A | B =>
  isLeft(either) ? fromLeft(either) : fromRight(either)

export interface EitherChain {
  <A, B, C>(f: (value: B) => Either<A, C>, either: Either<A, B>): Either<A, C>
  <A, B, C>(f: (value: B) => Either<A, C>): (either: Either<A, B>) => Either<A, C>
}

export interface EitherChainLeft {
  <A, B, C>(f: (value: A) => Either<C, B>, either: Either<A, B>): Either<C, B>
  <A, B, C>(f: (value: A) => Either<C, B>): (either: Either<A, B>) => Either<C, B>
}

export interface EitherMap {
  <A, B, C>(f: (value: B) => C, either: Either<A, B>): Either<A, C>
  <A, B, C>(f: (value: B) => C): (either: Either<A, B>) => Either<A, C>
}

export interface EitherMapLeft {
  <A, B, C>(f: (value: A) => C, either: Either<A, B>): Either<C, B>
  <A, B, C>(f: (value: A) => C): (either: Either<A, B>) => Either<C, B>
}

export interface EitherAP {
  <A, B, C>(fn: Either<A, (value: B) => C>, either: Either<A, B>): Either<A, C>
  <A, B, C>(fn: Either<A, (value: B) => C>): (either: Either<A, B>) => Either<A, C>
}
