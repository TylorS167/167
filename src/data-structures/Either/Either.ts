import {
  Arity0,
  Arity1,
  Arity10,
  Arity2,
  Arity3,
  Arity4,
  Arity5,
  Arity6,
  Arity7,
  Arity8,
  Arity9,
} from '../../types'
import { Left, fromLeft } from './Left'
import { Right, fromRight } from './Right'
import { curry2, pipe } from '../../categories/function'

/**
 * Either<A, B> data structure. Useful for handling errors without `throw`.
 * @name Either
 * @type
 */
export type Either<A, B> = Left<A> | Right<B>

export namespace Either {
  /**
   * Create an `Either<A, B>` of type of `Right<B>`.
   * @name Either.of<A, B>(value: B): Either<A, B>
   */
  export const of = <A, B>(value: B): Either<A, B> => Right.of(value)
  /**
   * Create an `Either<A, B>` of type `Left<A>`
   * @name Either.left<A, B>(value: A): Either<A, B>
   */
  export const left = <A, B>(value: A): Either<A, B> => Left.of(value)

  /**
   * Returns true if Either is of type Left.
   * @name Either.isLeft<A, B>(either: Either<A, B>): either is Left<A>
   */
  export const isLeft = <A, B>(either: Either<A, B>): either is Left<A> =>
    either.hasOwnProperty('@167/Left')

  /**
   * Returns true if Either is of type Right.
   * @name Either.isRight<A, B>(either: Either<A, B>): either is Right<B>
   */
  export const isRight = <A, B>(either: Either<A, B>): either is Right<B> =>
    either.hasOwnProperty('@167/Right')

  /**
   * Either Right chain.
   * @name Either.chain<A, B, C>(f: Arity1<B, Either<A, C>>, either: Either<A, B>): Either<A, C>
   */
  export const chain: EitherChain = curry2(function<A, B, C>(
    f: (value: B) => Either<A, C>,
    either: Either<A, B>
  ): Either<A, C> {
    return isLeft(either) ? either : f(fromRight(either))
  })

  /**
   * Either Left value chain.
   * @name Either.chainLeft<A, B, C>(f: Arity1<A, Either<C, B>>, either: Either<A, B>): Either<C, B>
   */
  export const chainLeft: EitherChainLeft = curry2(function<A, B, C>(
    f: (value: A) => Either<C, B>,
    either: Either<A, B>
  ): Either<C, B> {
    return isLeft(either) ? f(fromLeft(either)) : either
  })

  /**
   * Right value map.
   * @name Either.map<A, B, C>(f: Arity1<B, C>, either: Either<A, B>): Either<A, C>
   */
  export const map: EitherMap = curry2(function<A, B, C>(
    f: (value: B) => C,
    either: Either<A, B>
  ): Either<A, C> {
    return chain<A, B, C>(pipe<B, C, Either<A, C>>(f, of), either)
  })

  /**
   * Left value map.
   * @name Either.mapLeft<A, B, C>(f: Arity<A, C>, either: Either<A, B>): Either<C, B>
   */
  export const mapLeft: EitherMapLeft = curry2(function<A, B, C>(
    f: (value: A) => C,
    either: Either<A, B>
  ): Either<C, B> {
    return chainLeft(pipe<A, C, Either<C, B>>(f, left), either)
  })

  /**
   * Either Applicative.
   * @name Either.ap<A, B, C>(fn: Either<A, Arity1<B, C>>, value: Either<A, B>): Either<A, C>
   */
  export const ap: EitherAP = curry2(function<A, B, C>(
    fn: Either<A, (value: B) => C>,
    value: Either<A, B>
  ): Either<A, C> {
    return chain(f => map(f, value), fn)
  })

  export const tryCatch: EitherTry = curry2(function<A>(
    f: (...args: Array<any>) => any,
    args: ArrayLike<any>
  ): Either<Error, A> {
    try {
      return Either.of(f.apply(this, args))
    } catch (error) {
      return Either.left(error)
    }
  })
}

/**
 * Returns true if `Either<A, B>` is of type `Left<A>`.
 * @name isLeft<A, B>(either: Either<A, B>): either is Left<A>
 */
export const isLeft = Either.isLeft
/**
 * Returns true if `Either<A, B>` is of type `Right<B>`.
 * @name isRight<A, B>(either: Either<A, B>): either is Right<B>
 */
export const isRight = Either.isRight

/**
 * Returns the value contained in an Either.
 * @name fromEither<A, B>(either: Either<A, B>): A | B
 */
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

// prettier-ignore
export interface EitherTry {
  <Z>(fn: Arity0<Z>, args: Array<never>): Either<Error, Z>
  <A, Z>(fn: Arity1<A, Z>, args: [ A ]): Either<Error, Z>
  <A, B, Z>(fn: Arity2<A, B, Z>, args: [ A, B ]): Either<Error, Z>
  <A, B, C, Z>(fn: Arity3<A, B, C, Z>, args: [ A, B, C ]): Either<Error, Z>
  <A, B, C, D, Z>(fn: Arity4<A, B, C, D, Z>, args: [ A, B, C, D ]): Either<Error, Z>
  <A, B, C, D, E, Z>(fn: Arity5<A, B, C, D, E, Z>, args: [ A, B, C, D, E ]): Either<Error, Z>
  <A, B, C, D, E, F, Z>(fn: Arity6<A, B, C, D, E, F, Z>, args: [ A, B, C, D, E, F ]): Either<Error, Z>
  <A, B, C, D, E, F, G, Z>(fn: Arity7<A, B, C, D, E, F, G, Z>, args: [ A, B, C, D, E, F, G ]): Either<Error, Z>
  <A, B, C, D, E, F, G, H, Z>(fn: Arity8<A, B, C, D, E, F, G, H, Z>, args: [ A, B, C, D, E, F, G, H ]): Either<Error, Z>
  <A, B, C, D, E, F, G, H, I, Z>(fn: Arity9<A, B, C, D, E, F, G, H, I, Z>, args: [ A, B, C, D, E, F, G, H, I ]): Either<Error, Z>
  <A, B, C, D, E, F, G, H, I, J, Z>(fn: Arity10<A, B, C, D, E, F, G, H, I, J, Z>, args: [ A, B, C, D, E, F, G, H, I, J ]): Either<Error, Z>
  <Z>(fn: (...args: Array<any>) => Z, args: Array<any>): Either<Error, Z>
  <Z>(fn: (...args: Array<any>) => Z, args: ArrayLike<any>): Either<Error, Z>
  <Z>(fn: (...args: Array<any>) => Z, args: ReadonlyArray<any>): Either<Error, Z>

  <Z>(fn: Arity0<Z>): (args: Array<never>) => Either<Error, Z>
  <A, Z>(fn: Arity1<A, Z>): (args: [ A ]) => Either<Error, Z>
  <A, B, Z>(fn: Arity2<A, B, Z>): (args: [ A, B ]) => Either<Error, Z>
  <A, B, C, Z>(fn: Arity3<A, B, C, Z>): (args: [ A, B, C ]) => Either<Error, Z>
  <A, B, C, D, Z>(fn: Arity4<A, B, C, D, Z>): (args: [ A, B, C, D ]) => Either<Error, Z>
  <A, B, C, D, E, Z>(fn: Arity5<A, B, C, D, E, Z>): (args: [ A, B, C, D, E ]) => Either<Error, Z>
  <A, B, C, D, E, F, Z>(fn: Arity6<A, B, C, D, E, F, Z>): (args: [ A, B, C, D, E, F ]) => Either<Error, Z>
  <A, B, C, D, E, F, G, Z>(fn: Arity7<A, B, C, D, E, F, G, Z>): (args: [ A, B, C, D, E, F, G ]) => Either<Error, Z>
  <A, B, C, D, E, F, G, H, Z>(fn: Arity8<A, B, C, D, E, F, G, H, Z>): (args: [ A, B, C, D, E, F, G, H ]) => Either<Error, Z>
  <A, B, C, D, E, F, G, H, I, Z>(fn: Arity9<A, B, C, D, E, F, G, H, I, Z>): (args: [ A, B, C, D, E, F, G, H, I ]) => Either<Error, Z>
  <A, B, C, D, E, F, G, H, I, J, Z>(fn: Arity10<A, B, C, D, E, F, G, H, I, J, Z>): (args: [ A, B, C, D, E, F, G, H, I, J ]) => Either<Error, Z>
  <Z>(fn: (...args: Array<any>) => Z): (args: Array<any>) => Either<Error, Z>
  <Z>(fn: (...args: Array<any>) => Z): (args: ArrayLike<any>) => Either<Error, Z>
  <Z>(fn: (...args: Array<any>) => Z): (args: ReadonlyArray<any>) => Either<Error, Z>
}
