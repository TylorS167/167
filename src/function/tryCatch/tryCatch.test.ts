import * as assert from 'assert'

import { tryCatch } from './tryCatch'

describe(`tryCatch`, () => {
  describe(`given a function that throws and an error handler`, () => {
    it(`catches the error thrown`, () => {
      const error = new Error(`error`)
      const tryer = () => { throw error }
      const catcher = (err: Error) => assert.strictEqual(err, error)

      tryCatch(tryer, catcher)
    })
  })
})
