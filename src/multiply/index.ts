import { curry2 } from '../curry'

/**
 * Multiplies 2 numbers.
 * @name multiply(x: number, y: number): number
 */
export const multiply = curry2(__multiply)

function __multiply(x: number, y: number): number {
  return x * y
}
