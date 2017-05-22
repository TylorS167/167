import { Maybe, Nothing } from './'

const JUST = '@@167/just'

export type Just<A> = { readonly '@@167/just': A }

export const just = <A>(value: A): Just<typeof value> => ({ ['@@167/just']: value })

export function isJust<A>(maybe: Maybe<A>): maybe is Just<A> {
  return maybe.hasOwnProperty('@@167/just')
}

export const fromJust = <A>(just: Just<A>): A => just['@@167/just']
