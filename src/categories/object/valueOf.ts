/**
 * Calls the valueOf method of an object.
 * @name valueof<A>(obj: { valueOf(): A }): A
 */
export const valueOf = <A>(obj: { valueOf(): A }) => obj.valueOf()
