import { curry2 } from '../curry'

/**
 * Subtracts one number from another.
 * @name subtract(x: number, y: number): number
 */
export const subtract = curry2(__subtract)

function __subtract(x: number, y: number): number {
  return x - y
}
