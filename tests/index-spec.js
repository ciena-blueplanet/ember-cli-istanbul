'use strict'

const expect = require('chai').expect
const sayHello = require('../').sayHello

describe('sayHello()', () => {
  it('says hello', () => {
    expect(sayHello()).to.be.equal('Hello')
  })
})
