process.env.NODE_ENV = 'test'

const mongoose = require('mongoose')
const server = require('../config/server')

const chai = require('chai')
const chaiHttp = require('chai-http')

let should = chai.should()

chai.use(chaiHttp)

describe('/GET Recipes', () => {
    it('should get all recipes', (done) => {
        chai.request(server)
            .get('/recipe')
            .end((e, res) => {
                res.should.have.status(201)
            })
    })
})
