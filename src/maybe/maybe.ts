import { Just, isJust } from './just'
import { Nothing, isNothing } from './nothing'

export type Maybe<A> = Nothing | Just<A>

export const isMaybe = <A>(x: any): x is Maybe<A> => isJust(x) || isNothing<A>(x)
