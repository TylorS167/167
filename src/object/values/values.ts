import { keys } from '../keys'
import { map } from '../../list/map'

export const values = <A extends object>(obj: A): ReadonlyArray<A[keyof A]> =>
  map((key) => obj[key], keys(obj))
