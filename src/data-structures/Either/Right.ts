import { prop } from '../../categories/object/prop'

/**
 * Right data-structure used to create Either.
 * @name Right
 * @type
 */
export interface Right<A> {
  readonly '@167/Right': A
}

export namespace Right {
  /**
   * Creates a Right with the given value.
   * @name Right.of<A>(value: A): Right<A>
   */
  export const of = <A>(value: A): Right<A> => ({ '@167/Right': value })
}

/**
 * Extracts the value from a Right.
 * @name fromRight<A>(right: Right<A>): A
 */
export const fromRight: <A>(right: Right<A>) => A = prop('@167/Right')
