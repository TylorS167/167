import { curry2 } from '../curry'

/**
 * Divides 2 numbers
 * @name divide(x: number, y: number): number
 */
export const divide = curry2(__divide)

function __divide(right: number, left: number): number {
  return left / right
}
