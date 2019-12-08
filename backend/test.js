const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./app');
const should = chai.should();
chai.use(chaiHttp);

describe("Handlers", function(){
    it("should return a list", done=>{
        chai.request(server)
            .get('/handlers/')
            .end((err, res) => {
                //console.log(res)
                res.should.have.status(200);
                res.body.should.have.length(2);
                done();
            })
    })
})
