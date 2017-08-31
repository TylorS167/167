import { curry2 } from '../'

/**
 * Returns true if a string ends with a given value.
 * @name endsWith(search: string, str: string): boolean
 */
export const endsWith: EndsWith = curry2((search: string, str: string) => str.endsWith(search))

export interface EndsWith {
  (search: string, str: string): boolean
  (search: string): (str: string) => boolean
}
