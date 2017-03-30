export type Arity1<A, B> = (a: A) => B
export type Arity2<A, B, C> = (a: A, b: B) => C
export type Arity3<A, B, C, D> = (a: A, b: B, c: C) => D
export type Arity4<A, B, C, D, E> = (a: A, b: B, c: C, d: D) => E
export type Arity5<A, B, C, D, E, F> = (a: A, b: B, c: C, d: D, e: E) => F

export type Arity1Bound<that, A, B> = (this: that, a: A) => B
export type Arity2Bound<that, A, B, C> = (this: that, a: A, b: B) => C
export type Arity3Bound<that, A, B, C, D> = (this: that, a: A, b: B, c: C) => D
export type Arity4Bound<that, A, B, C, D, E> = (this: that, a: A, b: B, c: C, d: D) => E
export type Arity5Bound<that, A, B, C, D, E, F> = (this: that, a: A, b: B, c: C, d: D, e: E) => F
