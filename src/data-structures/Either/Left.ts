import { prop } from '../../'

export interface Left<A> {
  readonly '@167/Left': A
}

export namespace Left {
  export const of = <A>(value: A): Left<A> => ({ '@167/Left': value })
}

export const fromLeft: <A>(value: Left<A>) => A = prop('@167/Left')
