const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const request = require('request')
const should = chai.should()
const app = require('../app')
const db = require('../models')
chai.use(chaiHttp)

describe('TESTING CONJUNCTION', () => {
  const dummyData = {
    UserId : 2,
    CommunityId : 3
  }

  const deleteDummyData = {
    UserId : 2,
    CommunityId : 3
  }

  const errData = {
    UsepId : 2
  }

  it('should create communityuser data', function(done){
    chai
    .request(app)
    .post('/api/conjunctions')
    .send(dummyData)
    .end((err, res) => {
      expect(res).to.have.status(200)
      done()
    })
  })

  it('should delete communityuser data', function(done){
    this.timeout(8000)
    chai  
      .request(app)
      .post(`/api/conjunctions/delete`)
      .send(deleteDummyData)
      .end(function(err, res){
        expect(res).to.have.status(200)
        res.body.should.have.property('message').equal('berhasil delete data conjunction')
        done()
      })
  })

  it('should err in communityuser create', function(done){
    chai
    .request(app)
    .post('/api/conjunctions')
    .send(errData)
    .end((err, res) => {
      expect(res).to.have.status(400)
      done()
    })
  })

})