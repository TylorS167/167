/**
 * Calls the toString method on any object.
 * @name toString(obj: { toString(): string }): string
 * @category string
 */
export const toString = (obj: { toString(): string }): string => obj.toString()
