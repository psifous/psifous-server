const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const request = require('request')
const should = chai.should()
const app = require('../app')
chai.use(chaiHttp)

describe('TESTING INDEX', () => {
  it('should render something', function(done){
    chai
    .request(app)
    .get('/api')
    .end((err, res) => {
      res.body.should.have.property('message').equal('connected to psifous server')
      done()
    })
  })
})