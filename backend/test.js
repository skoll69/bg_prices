const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./app');
const should = chai.should();
const nock = require('nock')
const mockResponses = require('./mock_responses')

const lautapelit = require('./parsers/lautapelit');
const fantasiapelit = require('./parsers/fantasiapelit');
const puolenkuunpelit = require('./parsers/puolenkuunpelit');
const poromagia = require('./parsers/poromagia');
const pelipeikko = require('./parsers/pelipeikko');

chai.use(chaiHttp);

const RUN_INTEGRATION_TESTS = 1;

describe("Handlers", function(){
    it("should return a list", done=>{
        chai.request(server)
            .get('/handlers/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.length(5);
                done();
            })
    })
})

xdescribe("Intergration", function(){
    this.timeout(15000)
    this.slow(10000)
    before(function() {
        if(!RUN_INTEGRATION_TESTS){
            this.skip()
        }
    })

    describe("Lautapelit.fi", function(){
        it("should return a proper data structure", async()=>{
            let res = await chai.request(server).get('/query/lautapelit/dungeon%20petz')
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
        })
    })

    describe("Fantasiapelit", function(){
        it("should return a proper data structure", async()=>{
            let res = await chai.request(server).get('/query/fantasiapelit/dungeon%20lords')
            res.should.have.status(200);
            res.body.shop.should.equal('fantasiapelit');

            let item = res.body.data[0]
            item.should.have.property('name');
            item.should.have.property('imageUrl');
            item.should.have.property('price');
            item.should.have.property('available');
            item.should.have.property('itemUrl');
            item.should.have.property('currency');
        })
    })

    describe("Puolenkuunpelit", function(){
        it("should return a proper data structure", async()=>{
            let res = await chai.request(server).get('/query/puolenkuunpelit/dungeon%20lords')
            res.should.have.status(200);
            res.body.shop.should.equal('puolenkuunpelit');

            let item = res.body.data[0]
            item.should.have.property('name');
            item.should.have.property('imageUrl');
            item.should.have.property('price');
            item.should.have.property('available');
            item.should.have.property('itemUrl');
            item.should.have.property('currency');
        })
    })

    describe("Poromagia", function(){
        it("should return a proper data structure", async()=>{
            let res = await chai.request(server).get('/query/poromagia/dungeon%20lords')
            res.should.have.status(200);
            res.body.shop.should.equal('poromagia');

            let item = res.body.data[0]
            item.should.have.property('name');
            item.should.have.property('imageUrl');
            item.should.have.property('price');
            item.should.have.property('available');
            item.should.have.property('itemUrl');
            item.should.have.property('currency');
        })
    })

    describe("Pelipeikko", function(){
        it("should return a proper data structure", async()=>{
            let res = await chai.request(server).get('/query/pelipeikko/spirit%20island')
            res.should.have.status(200);
            res.body.shop.should.equal('pelipeikko');

            let item = res.body.data[0]
            item.should.have.property('name');
            item.should.have.property('imageUrl');
            item.should.have.property('price');
            item.should.have.property('available');
            item.should.have.property('itemUrl');
            item.should.have.property('currency');
        })
    })
})

describe("Unit", function(){
    this.slow(450)
    afterEach(function() {
        nock.cleanAll()
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
            item.should.have.property('imageUrl', 'https://lautapelit.fi/images/tuotekuvat/kuva100/2014/dungeon-petz-14.jpg');
            item.should.have.property('price', 45);
            item.should.have.property('available', true);
            item.should.have.property('itemUrl', 'http://www.lautapelit.fi/product.asp?sua=1&lang=1&s=16588');
            item.should.have.property('currency', '€');

            item = res[1]
            item.should.have.property('available', false);
        })
    })

    describe("Fantasiapelit", function(){
        it("should process the reponse", async function(){
            let qs = 'dungeon%20lords'
            nock('https://www.fantasiapelit.com')
            .get('/index.php?main=ai&mista=*&jamista=luokka&jamika=lautapeli/seurapeli&yhteen=eri&alue=&etsittava=' + qs)
            .reply(200, mockResponses.RESPONSE_FANTASIAPELIT)

            res = await fantasiapelit(qs)
            item = res[0]
            item.should.have.property('name', 'Dungeon Lords');
            item.should.have.property('imageUrl', 'https://fantasiapelit.com/pikkukuva.php?xy=1&img=larg9/165665.jpg');
            item.should.have.property('price', 50);
            item.should.have.property('available', true);
            item.should.have.property('itemUrl', 'https://fantasiapelit.com/index.php?main=ai&kat=single&mista=indeksi&etsittava=_165665');
            item.should.have.property('currency', '€');

            item = res[1]
            item.should.have.property('available', false);
        })
    })

    describe("Puolenkuunpelit", function(){
        it("should process the reponse", async function(){
            let qs = 'dungeon%20lords'
            nock('https://www.puolenkuunpelit.com')
            .get('/kauppa/advanced_search_result.php?manufacturers_id=23&keywords=' + qs)
            .reply(200, mockResponses.RESPONSE_PUOLENKUUNPELIT)

            res = await puolenkuunpelit(qs)
            item = res[0]
            item.should.have.property('name', 'Dungeon Lords');
            item.should.have.property('imageUrl', 'https://www.puolenkuunpelit.com/kauppa/images/zmg_dungeonlords.jpg');
            item.should.have.property('price', 39.9);
            item.should.have.property('available', true);
            item.should.have.property('itemUrl', 'https://www.puolenkuunpelit.com/kauppa/product_info.php?manufacturers_id=23&products_id=41553');
            item.should.have.property('currency', '€');

            item = res[1]
            item.should.have.property('price', 39);
            item.should.have.property('available', false);
        })
    })

    describe("Poromagia", function(){
        it("should process the reponse", async function(){
            let qs = 'spirint%20island'
            nock('https://poromagia.com')
            .get('/en/search/?q=' + qs)
            .reply(200, mockResponses.RESPONSE_POROMAGIA)

            res = await poromagia(qs)
            item = res[0]
            item.should.have.property('name', 'Spirit Island: Branch & Claw');
            item.should.have.property('imageUrl', 'https://poromagia.com/media/cache/d7/c0/d7c0f057cee88ed86b37767114be6697.jpg');
            item.should.have.property('price', 29.95);
            item.should.have.property('available', true);
            item.should.have.property('itemUrl', 'https://poromagia.com/en/catalogue/spirit-island-branch-claw-exp_147062/');
            item.should.have.property('currency', '€');

            item = res[1]
            item.should.have.property('price', 71.95);
            item.should.have.property('available', false);
        })
    })

    describe("Pelipeikko", function(){
        it("should process the reponse", async function(){
            let qs = 'spirit%20island'
            nock('https://pelipeikko.fi')
            .get('/fi/search?s=' + qs)
            .reply(200, mockResponses.RESPONSE_PELIPEIKKO)

            res = await pelipeikko(qs)
            item = res[0]
            item.should.have.property('name', 'Spirit Island');
            item.should.have.property('imageUrl', 'https://pelipeikko.fi/1394-medium_default/spirit-island.jpg');
            item.should.have.property('price', 69.95);
            item.should.have.property('available', false);
            item.should.have.property('itemUrl', 'https://pelipeikko.fi/fi/home/110-spirit-island');
            item.should.have.property('currency', '€');

            item = res[1]
            item.should.have.property('price', 27.95);
            item.should.have.property('available', true);
        })
    })
})
