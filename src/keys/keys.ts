import { List } from '../types'

/**
 * Returns the keys of an object.
 * @name keys<A>(obj: A): List<keyof A>
 */
export const keys = <A>(obj: A): List<keyof A> => (Object.keys(obj) as any) as List<keyof A>
