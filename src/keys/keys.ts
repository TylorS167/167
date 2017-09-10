import { List } from '../types'

export const keys = <A>(obj: A): List<keyof A> => (Object.keys(obj) as any) as List<keyof A>
