import { Just, fromJust } from './Just'
import { curry2, pipe } from '../../categories/function'

import { Nothing } from './Nothing'

/**
 * Maybe data structure.
 * @name Maybe
 * @type
 */
export type Maybe<A> = Just<A> | Nothing

export namespace Maybe {
  /**
   * Creates a Maybe containing the given value.
   */
  export const of: <A>(value: A) => Maybe<A> = Just.of

  /**
   * Returns `true` if a `Maybe<A>` is a `Just<A>`
   * @name Maybe.isJust<A>(maybe: Maybe<A>): maybe is Just<A>
   */
  export const isJust = <A>(maybe: Maybe<A>): maybe is Just<A> => maybe.hasOwnProperty('@167/Just')

  /**
   * Returns `true` if a `Maybe<A>` is a `Nothing`.
   * @name Maybe.isNothing<A>(maybe: Maybe<A>): maybe is Nothing
   */
  export const isNothing = <A>(maybe: Maybe<A>): maybe is Nothing =>
    !!(maybe as Nothing)['@167/Nothing']

  /**
   * Chaining for Maybe.
   * @name Maybe.chain<A, B>(f: Arity1<A, Maybe,B>>, maybe: Maybe<A>): Maybe<B>
   */
  export const chain: MaybeChain = curry2(function<A, B>(
    f: (value: A) => Maybe<B>,
    maybe: Maybe<A>
  ): Maybe<B> {
    return isJust(maybe) ? f(fromJust(maybe)) : Nothing
  })

  /**
   * Map the value contained in a Maybe.
   * @name Maybe.map<A, B>(f: Arity1<A, B>, maybe: Maybe<A>): Maybe<B>
   */
  export const map: MaybeMap = curry2(function<A, B>(
    f: (value: A) => B,
    maybe: Maybe<A>
  ): Maybe<B> {
    return chain(pipe(f, Maybe.of), maybe)
  })

  /**
   * Applicative for Maybe.
   * @name Maybe.ap<A, B>(fn: Maybe<Arity1<A, B>>, value: Maybe<A>): Maybe<B>
   */
  export const ap: MaybeAP = curry2(function<A, B>(
    fn: Maybe<(value: A) => B>,
    value: Maybe<A>
  ): Maybe<B> {
    return chain(f => map(f, value), fn)
  })
}

/**
 * Returns `true` if a `Maybe<A>` is a `Just<A>`
 * @name isJust<A>(maybe: Maybe<A>): maybe is Just<A>
 */
export const isJust = Maybe.isJust
/**
 * Returns `true` if a `Maybe<A>` is a `Nothing`
 * @name isNothing<A>(maybe: Maybe<A>): maybe is Nothing
 */
export const isNothing = Maybe.isNothing

/**
 * Extract the value of a Maybe. If the given maybe is of type `Nothing` it will 
 * return the default value, otherwise it will return the value contained in Maybe.
 * @name fromMaybe<A>(defaultValue: A, maybe: Maybe<A>): A
 */
export const fromMaybe: FromMaybe = curry2(function<A>(defaultValue: A, maybe: Maybe<A>): A {
  return Maybe.isNothing(maybe) ? defaultValue : fromJust(maybe)
})

/**
 * Wraps a possibly undefined value into a `Maybe`.
 * @name toMaybe<A>(value: A | void): Maybe<A>
 */
export const toMaybe = <A>(value: A | void): Maybe<A> =>
  value === void 0 ? Nothing : Maybe.of(value)

export interface MaybeChain {
  <A, B>(f: (value: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: (value: A) => Maybe<B>): (maybe: Maybe<A>) => Maybe<B>
}

export interface MaybeMap {
  <A, B>(f: (value: A) => B, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: (value: A) => B): (maybe: Maybe<A>) => Maybe<B>
}

export interface MaybeAP {
  <A, B>(fn: Maybe<(value: A) => B>, maybe: Maybe<A>): Maybe<B>
  <A, B>(fn: Maybe<(value: A) => B>): (maybe: Maybe<A>) => Maybe<B>
}

export interface FromMaybe {
  <A>(defaultValue: A, maybe: Maybe<A>): A
  <A>(defaultValue: A): (maybe: Maybe<A>) => A
}
