import { Either, fromEither } from './Either'
import { Test, describe, given, it } from '@typed/test'

export const test: Test = describe(`Either`, [
  describe(`Either.of`, [
    given(`a`, [
      it(`returns a Right a`, ({ equal, ok }) => {
        const value = { a: 1 }
        const either = Either.of(value)

        ok(Either.isRight(either))
        equal(value, fromEither(either))
      }),
    ]),
  ]),

  describe(`Either.left`, [
    given(`a`, [
      it(`returns a Left a`, ({ equal, ok }) => {
        const value = { a: 1 }
        const either = Either.left(value)

        ok(Either.isLeft(either))
        equal(value, fromEither(either))
      }),
    ]),
  ]),

  describe(`Either.chain`, [
    given(`(b -> Right c) and Right b`, [
      it(`returns a Right c`, ({ equal }) => {
        const value = { a: 1 }
        const either = Either.of(value)

        equal(either, Either.chain(Either.of, either))
      }),
    ]),

    given(`(b -> Left a) and Right b`, [
      it(`returns Left a`, ({ equal }) => {
        const value = { a: 1 }
        const right = Either.of(value)
        const left = Either.left(new Error('message'))
        const f = () => left

        equal(left, Either.chain(f, right))
      }),
    ]),

    given(`(b -> Right a) -> Left a`, [
      it(`returns Left a`, ({ equal }) => {
        const left = Either.left(1)
        equal(left, Either.chain(Either.of, left))
      }),
    ]),

    given(`(b -> Left a) and Left a`, [
      it(`returns given Left a`, ({ equal }) => {
        const left = Either.left(1)
        const f = (x: number) => Either.left(x + 1)

        equal(left, Either.chain(f, left))
      }),
    ]),
  ]),

  describe(`Either.map`, [
    given(`(b -> c) and Right b`, [
      it(`returns Right c`, ({ equal, ok }) => {
        const right = Either.of(1)
        const f = (x: number) => x + 1

        const sut = Either.map(f, right)

        ok(Either.isRight(sut))
        equal(2, fromEither(sut))
      }),
    ]),
  ]),
])
