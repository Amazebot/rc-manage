'use strict'

// const chai = require('chai')
// const should = chai.should()

const cli = require('.')

describe('CLI', () => {
  describe('constructor', () => {
    it('inherits event emmitter', (done) => {
      cli.on('test-event', () => done())
      cli.emit('test-event')
    })
  })
})
