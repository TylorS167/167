import { Lens } from '../types'
import { clone } from '../../object/clone'

export const lensPath: LensPathFn = <A extends object, B>(path: Array<string>): Lens<A, B> =>
  new LensPath<A, B>(path)

// TSLINT REALLY HATES THIS INTERFACE... but it works!
// tslint:disable:no-mixed-interface
// tslint:disable:no-unused-expression
// tslint:disable:no-angle-bracket-type-assertion
// tslint:disable:whitespace
export interface LensPathFn {
  <A extends Object, K extends keyof A = keyof A>(path: [K]): Lens<A, A[K]>
  // tslint:disable-next-line:typedef
  <A extends Object, K extends keyof A = keyof A, L extends keyof A[K] = keyof A[K] >(path: [ K, L ]): Lens<A, A[K][L]>
  <
    A extends Object,
    K extends keyof A = keyof A,
    L extends keyof A[K] = keyof A[K],
    M extends keyof A[K][L] = keyof A[K][L]
  >(path: [ K, L, M ]): Lens<A, A[K][L][M]>
  <
    A extends Object,
    K extends keyof A = keyof A,
    L extends keyof A[K] = keyof A[K],
    M extends keyof A[K][L] = keyof A[K][L],
    N extends keyof A[K][L][M] = keyof A[K][L][M]
  >(path: [ K, L, M, N ]): Lens<A, A[K][L][M][N]>
  <
    A extends Object,
    K extends keyof A = keyof A,
    L extends keyof A[K] = keyof A[K],
    M extends keyof A[K][L] = keyof A[K][L],
    N extends keyof A[K][L][M] = keyof A[K][L][M],
    O extends keyof A[K][L][M][N] = keyof A[K][L][M][N]
  >(path: [ K, L, M, N, O ]): Lens<A, A[K][L][M][N][O]>
  <
    A extends Object,
    K extends keyof A = keyof A,
    L extends keyof A[K] = keyof A[K],
    M extends keyof A[K][L] = keyof A[K][L],
    N extends keyof A[K][L][M] = keyof A[K][L][M],
    O extends keyof A[K][L][M][N] = keyof A[K][L][M][N],
    P extends keyof A[K][L][M][N][O] = keyof A[K][L][M][N][O]
  >(path: [ K, L, M, N, O, P ]): Lens<A, A[K][L][M][N][O][P]>
  <
    A extends Object,
    K extends keyof A = keyof A,
    L extends keyof A[K] = keyof A[K],
    M extends keyof A[K][L] = keyof A[K][L],
    N extends keyof A[K][L][M] = keyof A[K][L][M],
    O extends keyof A[K][L][M][N] = keyof A[K][L][M][N],
    P extends keyof A[K][L][M][N][O] = keyof A[K][L][M][N][O],
    Q extends keyof A[K][L][M][N][O][P] = keyof A[K][L][M][N][O][P]
  >(path: [ K, L, M, N, O, P, Q ]): Lens<A, A[K][L][M][N][O][P][Q]>
  <
    A extends Object,
    K extends keyof A = keyof A,
    L extends keyof A[K] = keyof A[K],
    M extends keyof A[K][L] = keyof A[K][L],
    N extends keyof A[K][L][M] = keyof A[K][L][M],
    O extends keyof A[K][L][M][N] = keyof A[K][L][M][N],
    P extends keyof A[K][L][M][N][O] = keyof A[K][L][M][N][O],
    Q extends keyof A[K][L][M][N][O][P] = keyof A[K][L][M][N][O][P],
    R extends keyof A[K][L][M][N][O][P][Q] = keyof A[K][L][M][N][O][P][Q]
  >(path: [ K, L, M, N, O, P, Q, R ]): Lens<A, A[K][L][M][N][O][P][Q][R]>
  <
    A extends Object,
    K extends keyof A = keyof A,
    L extends keyof A[K] = keyof A[K],
    M extends keyof A[K][L] = keyof A[K][L],
    N extends keyof A[K][L][M] = keyof A[K][L][M],
    O extends keyof A[K][L][M][N] = keyof A[K][L][M][N],
    P extends keyof A[K][L][M][N][O] = keyof A[K][L][M][N][O],
    Q extends keyof A[K][L][M][N][O][P] = keyof A[K][L][M][N][O][P],
    R extends keyof A[K][L][M][N][O][P][Q] = keyof A[K][L][M][N][O][P][Q],
    S extends keyof A[K][L][M][N][O][P][Q][R] = keyof A[K][L][M][N][O][P][Q][R]
  >(path: [ K, L, M, N, O, P, Q, R, S ]): Lens<A, A[K][L][M][N][O][P][Q][R][S]>
  <
    A extends Object,
    K extends keyof A = keyof A,
    L extends keyof A[K] = keyof A[K],
    M extends keyof A[K][L] = keyof A[K][L],
    N extends keyof A[K][L][M] = keyof A[K][L][M],
    O extends keyof A[K][L][M][N] = keyof A[K][L][M][N],
    P extends keyof A[K][L][M][N][O] = keyof A[K][L][M][N][O],
    Q extends keyof A[K][L][M][N][O][P] = keyof A[K][L][M][N][O][P],
    R extends keyof A[K][L][M][N][O][P][Q] = keyof A[K][L][M][N][O][P][Q],
    S extends keyof A[K][L][M][N][O][P][Q][R] = keyof A[K][L][M][N][O][P][Q][R],
    T extends keyof A[K][L][M][N][O][P][Q][R][S] = keyof A[K][L][M][N][O][P][Q][R][S]
  >(path: [ K, L, M, N, O, P, Q, R, S ]): Lens<A, A[K][L][M][N][O][P][Q][R][S][T]>

  <A extends Object, B>(path: Array<string>): Lens<A, B>
}
// tslint:enable:no-mixed-interface
// tslint:enable:no-unused-expression
// tslint:enable:no-angle-bracket-type-assertion
// tslint:enable:whitespace

class LensPath<A extends object, B> implements Lens<A, B> {
  protected path: Array<string>

  constructor(path: Array<string>) {
    this.path = path
  }

  public view(obj: A): B {
    const { path } = this

    let currentObj: any = obj

    for (const key of path) currentObj = currentObj[key]

    return currentObj
  }

  public updateAt(f: (value: B) => B, obj: A): A {
    const { path } = this
    const length = path.length
    const lastIndex = length - 1
    const lastKey = path[lastIndex]

    const clonedObj: any = clone(obj)

    let currentObj = clonedObj

    for (let i = 0; i < lastIndex; ++i) currentObj = currentObj[path[i]]

    currentObj[lastKey] = f(currentObj[lastKey])

    return clonedObj
  }
}
