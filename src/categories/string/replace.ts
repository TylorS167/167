import { curry3 } from '../'

export const replace: ReplaceArity3 = curry3(function(
  searchValue: string,
  replacer: string,
  str: string
) {
  return str.replace(searchValue, replacer)
})

export type Replacer = ((substring: string, ...args: any[]) => string) | string

export interface ReplaceArity3 {
  (search: string | RegExp, replacer: Replacer, str: string): string
  (search: string | RegExp): ReplaceArity2
  (search: string | RegExp, replacer: Replacer): ReplaceArity1
}

export interface ReplaceArity2 {
  (replacer: Replacer, str: string): string

  (replacer: Replacer): ReplaceArity1
}

export type ReplaceArity1 = (str: string) => string
