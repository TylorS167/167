import { Maybe, Nothing } from './'

export class Just<A> {
  private value: A
  constructor(value: A) {
    this.value = value
  }
}

export const just = <A>(value: A): Just<A> => new Just(value)

export function isJust<A>(maybe: Maybe<A>): maybe is Just<A> {
  return maybe instanceof Just
}

export const fromJust = <A>(just: Just<A>): A => (just as any).value
