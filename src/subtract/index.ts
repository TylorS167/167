import { curry2 } from '../curry'

/**
 * Subtracts one number from another.
 * @name subtract(right: number, left: number): number
 */
export const subtract = curry2(__subtract)

function __subtract(right: number, left: number): number {
  return left - right
}
