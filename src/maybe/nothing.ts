import { Just, Maybe } from './'

export class Nothing {}

const NOTHING: Nothing = new Nothing()

export const nothing = () => NOTHING

export function isNothing<A>(maybe: Maybe<A>): maybe is Nothing {
  return maybe === NOTHING
}
