import { Just, fromJust } from './Just'
import { curry2, pipe } from '../../categories/function'

import { Nothing } from './Nothing'

export type Maybe<A> = Just<A> | Nothing

export namespace Maybe {
  export const of: <A>(value: A) => Maybe<A> = Just.of

  export const isJust = <A>(maybe: Maybe<A>): maybe is Just<A> => maybe.hasOwnProperty('@167/Just')

  export const isNothing = <A>(maybe: Maybe<A>): maybe is Nothing =>
    !!(maybe as Nothing)['@167/Nothing']

  export const chain: MaybeChain = curry2(function<A, B>(
    f: (value: A) => Maybe<B>,
    maybe: Maybe<A>
  ): Maybe<B> {
    return isJust(maybe) ? f(fromJust(maybe)) : Nothing
  })

  export const map: MaybeMap = curry2(function<A, B>(
    f: (value: A) => B,
    maybe: Maybe<A>
  ): Maybe<B> {
    return chain(pipe(f, Maybe.of), maybe)
  })

  export const ap: MaybeAP = curry2(function<A, B>(
    fn: Maybe<(value: A) => B>,
    value: Maybe<A>
  ): Maybe<B> {
    return chain(f => map(f, value), fn)
  })
}

export const isJust = Maybe.isJust
export const isNothing = Maybe.isNothing

export const fromMaybe: FromMaybe = curry2(function<A>(defaultValue: A, maybe: Maybe<A>): A {
  return Maybe.isNothing(maybe) ? defaultValue : fromJust(maybe)
})

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
