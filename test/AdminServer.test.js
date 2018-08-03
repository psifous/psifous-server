const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const request = require('request')
const should = chai.should()
const app = require('../app')
const db = require('../models')
chai.use(chaiHttp)

describe('TESTING ADMIN', () => {
    const dummyData = {
      email: 'testadmin8@email.com',
      first_name: 'test',
      last_name: 'doang',
      password : 'hashpassword',
      createdAt: new Date(),
      updatedAt: new Date(),
      CommunityId : 5
    }

    const errData = {
      email: 'test1@email.com',
      first_name: 'test',
      last_name: 'doang',
      password : 'hashpassword',
      createdAt: new Date(),
      updatedAt: new Date(),
      CommunityId : 5
    }

  it('should register admin', function(done){
    chai
    .request(app)
    .post('/api/admins/')
    .send(dummyData)
    .end((err, res) => {
      let data = res.body
      expect(res).to.have.status(200)
      data.value.email.should.be.a('string')
      data.value.first_name.should.be.a('string')
      data.value.last_name.should.be.a('string')
      db.Admin.destroy({
        where:{
          id: data.value.id
        }
      })
      .then(()=>{
        done()
      })
    })
  })

  it('should error when register admin', function(done){
    chai
    .request(app)
    .post('/api/admins/')
    .send(errData)
    .end((err, res) => {
      let data = res.body
      expect(res).to.have.status(400)
      done()
    })
  })

  it('should get data admin',function(done){
    this.timeout(8000)
    chai
      .request(app)
      .get('/api/admins/1')
      .end((err,res)=>{
        let data = res.body
        expect(res).to.have.status(200)
        data.value.should.be.an('object')
        data.should.have.property('message').equal(' berhasil kirim data admin personal')
        res.body.should.have.property('value')
        data.value.first_name.should.be.a('string')
        data.value.email.should.be.a('string')
        data.value.last_name.should.be.a('string')
        data.value.password.should.be.a('string')
        done()
      })
  })

  it('should get all data admin', function(done){
    this.timeout(8000)
    chai
      .request(app)
      .get('/api/admins/')
      .end((err,res)=>{
        expect(res).to.have.status(200)
        let data = res.body
        data.should.have.property('message').equal('kirim semua data admin')
        res.body.should.have.property('value')
        done()
      })
  })

  it('should edit an admin data', function(done){
    this.timeout(8000)
    chai  
      .request(app)
      .put(`/api/admins/3`)
      .send({
        last_name: 'ngetest mocha',
      })
      .end(function(err, res){
        expect(res).to.have.status(200)
        res.body.should.have.property('value')
        done()
      })
  })
  
  it('should delete an admin', function(done){
    this.timeout(8000)
    chai  
      .request(app)
      .delete(`/api/admins/5`)
      .end(function(err, res){
        expect(res).to.have.status(200)
        res.body.should.have.property('message').equal('berhasil delete data admin')
        done()
      })
  })

})