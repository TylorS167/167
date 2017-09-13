import { Either, fromLeft, fromRight, isLeft } from '../Either'

/**
 * Swaps the values contained in an `Either`.
 * @name swap<A, B>(either: Either<A, B>): Either<B, A>
 */
export function swap<A, B>(either: Either<A, B>): Either<B, A> {
  return isLeft(either) ? Either.of(fromLeft(either)) : Either.left(fromRight(either))
}
