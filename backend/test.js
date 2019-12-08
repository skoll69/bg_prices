const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./app');
//const lautapelit = require('./lautapelit');
const should = chai.should();
chai.use(chaiHttp);

const RUN_INTEGRATION_TESTS = true;

describe("Handlers", function(){
    it("should return a list", done=>{
        chai.request(server)
            .get('/handlers/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.length(2);
                done();
            })
    })
})

describe("Intergration", function(){
    before(function() {
        if(!RUN_INTEGRATION_TESTS){
            this.skip()
        }
    })

    describe("Lautapelit.fi", function(){
        it("should return a proper data structure", done=>{
            chai.request(server)
                .get('/query/lautapelit/dungeon%20petz')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.shop.should.equal('lautapelit');
                    res.body.data[0].should.have.property('name');
                    res.body.data[0].should.have.property('imageUrl');
                    res.body.data[0].should.have.property('price');
                    res.body.data[0].should.have.property('available');
                    res.body.data[0].should.have.property('itemUrl');
                    res.body.data[0].should.have.property('currency');
                    done();
                })
        })
    })
})
