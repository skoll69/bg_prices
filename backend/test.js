const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./app');
const lautapelit = require('./parsers/lautapelit');
const should = chai.should();
const nock = require('nock')
const mockResponses = require('./mock_responses')

chai.use(chaiHttp);

const RUN_INTEGRATION_TESTS = false;

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

describe("Lautapelit.fi", function(){
    it("should process the reponse", async function(){
        let qs = 'dungeon%20petz'
        nock('https://www.lautapelit.fi')
        .get('/sysNet/getProductsJSON/getProductsJSON.aspx?sua=1&lang=1&reID=1&sanaHaku=' + qs)
        .reply(200, mockResponses.RESPONSE_LAUTAPELIT)
        .get('/getVarastosaldoJSON.asp?sua=1&lang=1&s=16588&tID=15613')
        .reply(200, mockResponses.RESPONSE_LAUTAPELIT_AVAILABILITY_AVAILABLE)
        .get('/getVarastosaldoJSON.asp?sua=1&lang=1&s=21297&tID=20227')
        .reply(200, mockResponses.RESPONSE_LAUTAPELIT_AVAILABILITY_NOT_AVAILABLE)

        res = await lautapelit(qs)
        item = res[0]
        item.should.have.property('name', 'Dungeon Petz (ENG)');
        item.should.have.property('imageUrl');
        item.should.have.property('price');
        item.should.have.property('available', true);
        item.should.have.property('itemUrl');
        item.should.have.property('currency');

        item = res[1]
        item.should.have.property('available', false);
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

                    let item = res.body.data[0]
                    //item.should.have.keys('name', 'imageUrl');
                    item.should.have.property('name');
                    item.should.have.property('imageUrl');
                    item.should.have.property('price');
                    item.should.have.property('available');
                    item.should.have.property('itemUrl');
                    item.should.have.property('currency');
                    done();
                })
        })
    })
})
