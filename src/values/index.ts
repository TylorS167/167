import { List } from '../types'
import { flip } from '../flip'
import { keys } from '../keys'
import { map } from '../map'
import { prop } from '../prop'

const propFlipped: <A>(obj: A) => <K extends keyof A>(key: K) => A[K] = flip(prop)

/**
 * Returns the values of an object.
 * @name values<A>(obj: A): List<A[keyof A]>
 */
export const values = <A>(obj: A): List<A[keyof A]> => map(propFlipped(obj), keys(obj))
