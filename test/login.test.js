const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const request = require('request')
const should = chai.should()
const app = require('../app')
const db = require('../models')
chai.use(chaiHttp)


describe('TESTING LOGIN', () => {
  const dummyDataUser = {
    email:'test20@email.com',
    password : '12345'
  }
  
  const dummyDataAdmin = {
    email:'testadmin4@email.com',
    password: '12345'
  }

  const dummyDataError = {
    email : 'walawpanda',
    password : 12345
  }

  it('should login an user', function(done){
    chai
    .request(app)
    .post('/api/login')
    .send(dummyDataUser)
    .end((err, res) => {
      expect(res).to.have.status(200)
      res.body.should.have.property('token')
      done()
    })
  })

  it('should login an admin', function(done){
    chai
    .request(app)
    .post('/api/login')
    .send(dummyDataAdmin)
    .end((err, res) => {
      expect(res).to.have.status(200)
      res.body.should.have.property('token')
      done()
    })
  })

  it('should error at login', function(done){
    chai
    .request(app)
    .post('/api/login')
    .send(dummyDataError)
    .end((err, res) => {
      expect(res).to.have.status(400)
      done()
    })
  })
})