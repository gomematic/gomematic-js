/* global describe, it */

import mock from 'xhr-mock'
// import sinon from 'sinon'
import assert from 'assert'

import GomematicClient from '../src/index'

mock.setup()

describe('Gomematic Client', () => {
  describe('dummy', () => {
    it('fake works as expected', () => {
      let client = new GomematicClient()

      assert(client !== undefined)
    })
  })
})
