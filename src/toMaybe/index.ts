import { Either, fromRight, isLeft, isRight } from '../Either'
import { Maybe, Nothing } from '@typed/maybe'

const VOID = void 0

/**
 * Converts a possibly undefined value to a `Maybe`.
 * Also converts `Either a b` to `Maybe b`.
 * @name toMaybe<A>(value: A | void): Maybe<A>
 */
export const toMaybe: ToMaybe = function<A>(value: any): Maybe<A> {
  if (value === VOID || isLeft(value)) return Nothing
  if (isRight<any, A>(value)) return Maybe.of(fromRight(value))

  return Maybe.of(value)
}

export type ToMaybe = {
  <A, B>(either: Either<A, B>): Maybe<B>
  <A>(value: A | void): Maybe<A>
}
