import { prop } from '../../categories/object/prop'

export interface Right<A> {
  readonly '@167/Right': A
}

export namespace Right {
  export const of = <A>(value: A): Right<A> => ({ '@167/Right': value })
}

export const fromRight: <A>(right: Right<A>) => A = prop('@167/Right')
