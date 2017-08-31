import { prop } from '../../'

/**
 * Left data structure used to create Either.
 * @name Left
 * @type
 */
export interface Left<A> {
  readonly '@167/Left': A
}

export namespace Left {
  /**
   * Creates a Left containing given value.
   * @name Left.of<A>(value: A): Left<A>
   */
  export const of = <A>(value: A): Left<A> => ({ '@167/Left': value })
}

/**
 * Extracts the value contained in a Left.
 * @name fromLeft<A>(left: Left<A>): A
 */
export const fromLeft: <A>(left: Left<A>) => A = prop('@167/Left')
