import { curry2 } from '../'

export const startsWith: StartsWith = curry2((search: string, str: string) =>
  str.startsWith(search)
)

export interface StartsWith {
  (search: string, str: string): boolean
  (search: string): (str: string) => boolean
}
