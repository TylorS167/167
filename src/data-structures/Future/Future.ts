import { curry2, curry3, pipe } from '../../categories/function'

import { Arity1 } from '../../'

/**
 * Asynchronous Either data type. Similar to a Promise, but lazizer.
 * @name Future
 * @type
 */
export interface Future<A, B> {
  readonly fork: Fork<A, B>
}

export type Fork<A, B> = (failure: Function | Arity1<A, any>, success: Arity1<B, any>) => void

export namespace Future {
  /**
   * Converts a Future<A, B> into a Promise<B>.
   * @name Future.toPromise<A>(future: Future<any, A): Promise<A>
   */
  export const toPromise = <A>({ fork }: Future<any, A>): Promise<A> =>
    new Promise((resolve, reject) => fork(reject, resolve))

  /**
   * Creates a `Future<A, B>`.
   * @name Future.create<A, B>()
   */
  export const create = <A, B>(fork: Fork<A, B>): Future<A, B> => ({ fork })

  /**
   * Creates a Future when forked that will resolve with the given value.
   * @name Future.of<A, B>(value: B): Future<A, B>
   */
  export const of = <A = any, B = any>(value: B): Future<A, B> => create(forkOf(value))

  /**
   * Creates a Future that will reject when forked.
   * @name Future.reject<A, B>(value: A): Future<A, B>
   */
  export const reject = <A = any, B = any>(value: A): Future<A, B> => create(forkReject(value))

  /**
   * Chaining for `Future<A, B>`.
   * @name Future.chain<A, B, C>(f: (value: B) => Future<A, C>, future: Future<A, B>): Future<A, C>
   */
  export const chain: FutureChain = curry2(function<A, B, C>(
    f: (value: B) => Future<A, C>,
    future: Future<A, B>
  ): Future<A, C> {
    const fork = (failure: Arity1<A, any>, success: Arity1<C, any>) =>
      future.fork(failure, pipe(f, success))

    return { fork }
  })

  /**
   * Left chaining for `Future<A, B>`
   * @name Future.chainLeft<A, B, C>(f: (value: A) => C, future: Future<A, B>): Future<C, B>
   */
  export const chainLeft: FutureChainLeft = curry2(function<A, B, C>(
    f: (value: A) => C,
    future: Future<A, B>
  ): Future<C, B> {
    const fork = (failure: Arity1<C, any>, success: Arity1<B, any>) =>
      future.fork(pipe(f, failure), success)

    return { fork }
  })

  /**
   * Map the values of a Future.
   * @name Future.map<A, B, C>(f: Arity1<B, C>, future: Future<A, B>): Future<A, C>
   */
  export const map: FutureMap = curry2(function<A, B, C>(
    f: (value: B) => C,
    future: Future<A, B>
  ): Future<A, C> {
    return chain(pipe(f, Future.of), future)
  })

  /**
   * Left mapping for Futures.
   * @name Future.mapLeft<A, B, C>(f: Arity<A, C>, future: Future<A, B>): Future<C, B>
   */
  export const mapLeft: FutureMapLeft = curry2(function<A, B, C>(
    f: (value: A) => C,
    future: Future<A, B>
  ): Future<C, B> {
    return chainLeft(pipe(f, Future.reject), future)
  })

  /**
   * Applicative for Future.
   * @name Future.ap<A, B, C>(fn: Future<A, Arity1<B, C>>, value: Future<A, B>): Future<A, C>
   */
  export const ap: FutureAP = curry2(function<A, B, C>(
    fn: Future<A, (value: B) => C>,
    value: Future<A, B>
  ): Future<A, C> {
    return chain(f => map(f, value), fn)
  })

  /**
   * Fork a Future.
   * @name Future.fork<A, B>(failure: Arity1<A, any>, success: Arit1<B, any> future: Future<A, B>): void
   */
  export const fork: FutureFork = curry3(function<A, B>(
    failure: (value: A) => any,
    success: (value: B) => any,
    future: Future<A, B>
  ): void {
    return future.fork(failure, success)
  })

  /**
   * Returns true if input provided is a Future.
   */
  export function isFuture<A, B>(future: any): future is Future<A, B> {
    if (!future || typeof future !== 'object') return false

    const { fork } = future

    return typeof fork === 'function' && fork.length === 2
  }

  /**
   * Combine 2 Futures together.
   * @name Either.combine<A, B, C, D>(f: Arity2<B, C, D>, ab: Future<A, B>, ac: Future<A, C>): Future<A, D>
   */
  export const combine: FutureCombine = curry3(function<A, B, C, D>(
    f: (b: B, c: C) => D,
    futureAB: Future<A, B>,
    futureAC: Future<A, C>
  ): Future<A, D> {
    const fork = (failure: Arity1<A, any>, success: Arity1<D, any>) =>
      futureAB.fork(failure, b => futureAC.fork(failure, c => success(f(b, c))))

    return { fork }
  })

  /**
   * Combines many Futures together.
   * @name Future.combineArray<A>(f: (...args: Array<any>) => A, futures: Array<Future<A, B>): Future<A, Z>
   */
  export const combineArray: FutureCombineArray = curry2(function<A>(
    f: (...args: Array<any>) => A,
    futures: ReadonlyArray<Future<any, any>>
  ): Future<any, A> {
    const fork = (failure: Arity1<any, any>, success: Arity1<A, any>) =>
      Promise.all(futures.map(toPromise)).then(pipe(f, success), failure)

    return { fork }
  })
}

function forkOf<A>(value: A) {
  return function(_: any, success: Arity1<A, any>): void {
    success(value)
  }
}

function forkReject<A>(value: A) {
  return function(failure: Arity1<A, any>) {
    failure(value)
  }
}

export interface FutureChain {
  <A, B, C>(f: (value: B) => Future<A, C>, future: Future<A, B>): Future<A, C>
  <A, B, C>(f: (value: B) => Future<A, C>): (future: Future<A, B>) => Future<A, C>
}

export interface FutureChainLeft {
  <A, B, C>(f: (value: A) => Future<C, B>, future: Future<A, B>): Future<C, B>
  <A, B, C>(f: (value: A) => Future<C, B>): (future: Future<A, B>) => Future<C, B>
}

export interface FutureMap {
  <A, B, C>(f: (value: B) => C, future: Future<A, B>): Future<A, C>
  <A, B, C>(f: (value: B) => C): (future: Future<A, B>) => Future<A, C>
}

export interface FutureMapLeft {
  <A, B, C>(f: (value: A) => C, future: Future<A, B>): Future<C, B>
  <A, B, C>(f: (value: A) => C): (future: Future<A, B>) => Future<C, B>
}

export interface FutureAP {
  <A, B, C>(fn: Future<A, (value: B) => C>, future: Future<A, B>): Future<A, C>
  <A, B, C>(fn: Future<A, (value: B) => C>): (future: Future<A, B>) => Future<A, C>
}

export interface FutureFork {
  <A, B>(failure: (value: A) => any, success: (value: B) => any, future: Future<A, B>): void
  <A, B>(failure: (value: A) => any): (success: (value: B) => any, future: Future<A, B>) => void
  <A, B>(failure: (value: A) => any, success: (value: B) => any): (future: Future<A, B>) => void
  <A, B>(failure: (value: A) => any): (success: (value: B) => any) => (future: Future<A, B>) => void
}

export interface FutureCombine {
  <A, B, C, D>(f: (b: B, c: C) => D, futureAB: Future<A, B>, futureAC: Future<A, C>): Future<A, D>
  <A, B, C, D>(f: (b: B, c: C) => D): (
    futureAB: Future<A, B>,
    futureAC: Future<A, C>
  ) => Future<A, D>
  <A, B, C, D>(f: (b: B, c: C) => D): (
    futureAB: Future<A, B>
  ) => (futureAC: Future<A, C>) => Future<A, D>
  <A, B, C, D>(f: (b: B, c: C) => D, futureAB: Future<A, B>): (
    futureAC: Future<A, C>
  ) => Future<A, D>
}

export interface FutureCombineArray {
  <Err, A, Z>(f: (a: A) => Z, futures: [Future<Err, A>]): Future<Err, Z>
  <Err, A, B, Z>(f: (a: A, b: B) => Z, futures: [Future<Err, A>, Future<Err, B>]): Future<Err, Z>
  <Err, A, B, C, Z>(
    f: (a: A, b: B, c: C) => Z,
    futures: [Future<Err, A>, Future<Err, B>, Future<Err, C>]
  ): Future<Err, Z>
  <Err, A, B, C, D, Z>(
    f: (a: A, b: B, c: C, d: D) => Z,
    futures: [Future<Err, A>, Future<Err, B>, Future<Err, C>, Future<Err, D>]
  ): Future<Err, Z>
  <Err, A, B, C, D, E, Z>(
    f: (a: A, b: B, c: C, d: D, e: E) => Z,
    futures: [Future<Err, A>, Future<Err, B>, Future<Err, C>, Future<Err, D>, Future<Err, E>]
  ): Future<Err, Z>
  <Err, A, B, C, D, E, F, Z>(
    f: (a: A, b: B, c: C, d: D, e: E, f: F) => Z,
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>
    ]
  ): Future<Err, Z>
  <Err, A, B, C, D, E, F, G, Z>(
    f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => Z,
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>,
      Future<Err, G>
    ]
  ): Future<Err, Z>
  <Err, A, B, C, D, E, F, G, H, Z>(
    f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => Z,
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>,
      Future<Err, G>,
      Future<Err, H>
    ]
  ): Future<Err, Z>
  <Err, A, B, C, D, E, F, G, H, I, Z>(
    f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => Z,
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>,
      Future<Err, G>,
      Future<Err, H>,
      Future<Err, I>
    ]
  ): Future<Err, Z>
  <Err, A, B, C, D, E, F, G, H, I, J, Z>(
    f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => Z,
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>,
      Future<Err, G>,
      Future<Err, H>,
      Future<Err, I>,
      Future<Err, J>
    ]
  ): Future<Err, Z>

  <Err, A, Z>(f: (a: A) => Z): (futures: [Future<Err, A>]) => Future<Err, Z>
  <Err, A, B, Z>(f: (a: A, b: B) => Z): (
    futures: [Future<Err, A>, Future<Err, B>]
  ) => Future<Err, Z>
  <Err, A, B, C, Z>(f: (a: A, b: B, c: C) => Z): (
    futures: [Future<Err, A>, Future<Err, B>, Future<Err, C>]
  ) => Future<Err, Z>
  <Err, A, B, C, D, Z>(f: (a: A, b: B, c: C, d: D) => Z): (
    futures: [Future<Err, A>, Future<Err, B>, Future<Err, C>, Future<Err, D>]
  ) => Future<Err, Z>
  <Err, A, B, C, D, E, Z>(f: (a: A, b: B, c: C, d: D, e: E) => Z): (
    futures: [Future<Err, A>, Future<Err, B>, Future<Err, C>, Future<Err, D>, Future<Err, E>]
  ) => Future<Err, Z>
  <Err, A, B, C, D, E, F, Z>(f: (a: A, b: B, c: C, d: D, e: E, f: F) => Z): (
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>
    ]
  ) => Future<Err, Z>
  <Err, A, B, C, D, E, F, G, Z>(f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => Z): (
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>,
      Future<Err, G>
    ]
  ) => Future<Err, Z>
  <Err, A, B, C, D, E, F, G, H, Z>(f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => Z): (
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>,
      Future<Err, G>,
      Future<Err, H>
    ]
  ) => Future<Err, Z>
  <Err, A, B, C, D, E, F, G, H, I, Z>(
    f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => Z
  ): (
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>,
      Future<Err, G>,
      Future<Err, H>,
      Future<Err, I>
    ]
  ) => Future<Err, Z>
  <Err, A, B, C, D, E, F, G, H, I, J, Z>(
    f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => Z
  ): (
    futures: [
      Future<Err, A>,
      Future<Err, B>,
      Future<Err, C>,
      Future<Err, D>,
      Future<Err, E>,
      Future<Err, F>,
      Future<Err, G>,
      Future<Err, H>,
      Future<Err, I>,
      Future<Err, J>
    ]
  ) => Future<Err, Z>

  <Err, A>(f: (...args: Array<any>) => A, futures: Array<Future<Err, any>>): Future<Err, A>
  <Err, A>(f: (...args: Array<any>) => A, futures: ArrayLike<Future<Err, any>>): Future<Err, A>
  <Err, A>(f: (...args: Array<any>) => A, futures: ReadonlyArray<Future<Err, any>>): Future<Err, A>

  <Err, A>(f: (...args: Array<any>) => A): (futures: Array<Future<Err, any>>) => Future<Err, A>
  <Err, A>(f: (...args: Array<any>) => A): (futures: ArrayLike<Future<Err, any>>) => Future<Err, A>
  <Err, A>(f: (...args: Array<any>) => A): (
    futures: ReadonlyArray<Future<Err, any>>
  ) => Future<Err, A>
}
