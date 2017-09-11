import { curry2 } from '../curry'

/**
 * Applies `%` to 2 numbers.
 * @name modulo(x: number, y: number): number
 */
export const modulo = curry2(__modulo)

function __modulo(x: number, y: number): number {
  return x % y
}
