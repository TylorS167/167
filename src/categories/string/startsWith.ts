import { curry2 } from '../'

/**
 * Returns true if a string starts with the given search value.
 * @name startsWith(search: string, str: string): boolean
 */
export const startsWith: StartsWith = curry2((search: string, str: string) =>
  str.startsWith(search)
)

export interface StartsWith {
  (search: string, str: string): boolean
  (search: string): (str: string) => boolean
}
