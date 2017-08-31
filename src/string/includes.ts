import { curry2 } from '../'

export const includes: Includes = curry2((search: string, str: string) => str.includes(search))

export interface Includes {
  (search: string, str: string): boolean
  (search: string): (str: string) => boolean
}
