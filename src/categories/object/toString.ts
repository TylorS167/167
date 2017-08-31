/**
 * Calls the toString method on any object.
 * @name toString
 * @category string
 */
export const toString = (obj: { toString(): string }): string => obj.toString()
