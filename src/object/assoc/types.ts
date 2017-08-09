export interface AssocArity3 {
  <K extends string, A extends object, B>(path: K, value: B, obj: A): Readonly<A> & { readonly [S in K]: B }
  <K extends string, A extends object, B>(path: K, value: B): AssocArity1<A, K, B>
  <K extends string, A extends object>(path: K): AssocArity2<A, K>
}

export interface AssocArity2<A extends object, Key extends string> {
  <B>(value: B, obj: A): Readonly<A> & { readonly [K in Key]: B }
  <B>(value: B): AssocArity1<A, Key, B>
}

export interface AssocArity1<A extends object, Key extends string, B> {
  (obj: A): Readonly<A> & { readonly [K in Key]: B }
}
