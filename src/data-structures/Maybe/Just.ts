/**
 * Just data type.
 * @name Just
 * @type
 */
export interface Just<A> {
  readonly '@167/Just': A
}

export namespace Just {
  /**
   * Creates a `Just<A>` containing a value.
   * @name Just.of<A>(value: A): Just<A>
   */
  export function of<A>(value: A): Just<A> {
    return { '@167/Just': value }
  }
}

/**
 * Extracts the value from a Just.
 * @name fromJust<A>(just: Just<A>): A
 */
export const fromJust = <A>(just: Just<A>): A => just['@167/Just']
