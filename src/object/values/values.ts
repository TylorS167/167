import { keys } from '../keys'
import { map } from '../../list/map'

export const values = <A>(obj: A): ReadonlyArray<A[keyof A]> =>
  map((key) => obj[key], keys(obj))
