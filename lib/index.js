'use strict'

const { EventEmitter } = require('events')

class CLI extends EventEmitter {
  constructor () {
    super()
    console.log('\n🚀⚙ RC MANAGE\n')
  }
}

module.exports = new CLI()
