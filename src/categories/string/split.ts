import { curry2 } from '../function/curry/curry2'

export const split: Split = curry2(function(at: string, str: string): ReadonlyArray<string> {
  return str.split(at)
})

export interface Split {
  <A extends ArrayLike<string> = ReadonlyArray<string>>(at: string | RegExp, str: string): A
  <A extends ArrayLike<string> = ReadonlyArray<string>>(at: string | RegExp): (str: string) => A
}
