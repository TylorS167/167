import { Just, Maybe } from './'

export class Nothing {}

const NOTHING: Nothing = new Nothing()

export const nothing = () => NOTHING

export function isNothing(nothing: Nothing): true
export function isNothing<A>(just: Just<A>): false
export function isNothing<A>(maybe: Maybe<A>): maybe is Nothing
export function isNothing<A>(maybe: Maybe<A>): maybe is Nothing {
  return maybe === NOTHING
}
