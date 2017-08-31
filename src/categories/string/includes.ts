import { curry2 } from '../'

/**
 * Returns true if the given string contains the search value.
 * @name includes(search: string. str: string): boolean
 */
export const includes: Includes = curry2((search: string, str: string) => str.includes(search))

export interface Includes {
  (search: string, str: string): boolean
  (search: string): (str: string) => boolean
}
