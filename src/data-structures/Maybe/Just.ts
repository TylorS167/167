export interface Just<A> {
  readonly '@167/Just': A
}

export namespace Just {
  export function of<A>(value: A): Just<A> {
    return { '@167/Just': value }
  }
}

export const fromJust = <A>(just: Just<A>): A => just['@167/Just']
