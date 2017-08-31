import { curry2 } from '../'

export const endsWith: EndsWith = curry2((search: string, str: string) => str.endsWith(search))

export interface EndsWith {
  (search: string, str: string): boolean
  (search: string): (str: string) => boolean
}
