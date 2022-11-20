const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app');
const should = chai.should();
const nock = require('nock')
const mockResponses = require('./mock_responses')

const lautapelit = require('./parsers/lautapelit');
const fantasiapelit = require('./parsers/fantasiapelit');
const puolenkuunpelit = require('./parsers/puolenkuunpelit');
const poromagia = require('./parsers/poromagia');
const pelipeikko = require('./parsers/pelipeikko');
const philibertnet = require('./parsers/philibertnet');

chai.use(chaiHttp);

let server;

describe("Intergration", function(){
    this.timeout(15000)
    this.slow(10000)

    before(function() {
        if(process.env.SKIP_INTEGRATION_TESTS){
            this.skip()
        } else {
            server = app.listen(3000)
        }
    })

    after( () => {
        if (server) {
            server.close()
        }
    })

    it("Handlers should return a list", done=>{
        chai.request(server)
            .get('/handlers/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.length(4);
                done();
            })
    })

    it("Lautapelit.fi", async()=>{
        let res = await chai.request(server).get('/query/lautapelit/dungeon%20petz')
        res.should.have.status(200);
        res.body.shop.should.equal('lautapelit');

        let item = res.body.data[0]
        item.should.have.property('name');
        item.should.have.property('imageUrl');
        item.should.have.property('price');
        item.should.have.property('available');
        item.should.have.property('itemUrl');
        item.should.have.property('currency');
    })

    it("Lautapelit.fi 2", async()=>{
        let res = await chai.request(server).get('/query/lautapelit/dungeon')
        res.should.have.status(200);
        res.body.shop.should.equal('lautapelit');

        let item = res.body.data[0]
        item.should.have.property('name');
        item.should.have.property('imageUrl');
        item.should.have.property('price');
        item.should.have.property('available');
        item.should.have.property('itemUrl');
        item.should.have.property('currency');
    })

    it("Fantasiapelit", async()=>{
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

    xit("Puolenkuunpelit", async()=>{
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

    it("Poromagia", async()=>{
        let res = await chai.request(server).get('/query/poromagia/spirit%20island')
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

    it("Pelipeikko", async()=>{
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

    xit("Philibertnet", async()=>{
        let res = await chai.request(server).get('/query/philibertnet/dungeon%20lords')
        res.should.have.status(200);
        res.body.shop.should.equal('philibertnet');

        let item = res.body.data[0]
        item.should.have.property('name');
        item.should.have.property('imageUrl');
        item.should.have.property('price');
        item.should.have.property('available');
        item.should.have.property('itemUrl');
        item.should.have.property('currency');
    })
})

describe("Unit", function(){
    this.slow(700)
    afterEach(function() {
        nock.cleanAll()
    })

    it("Lautapelit.fi", async function(){
        let qs = 'wingspan'
        nock('https://lautapelit.fi')
        .get('/search/?q=' + qs)
        .reply(200, mockResponses.RESPONSE_LAUTAPELIT)

        res = await lautapelit(qs)
        item = res[0]
        item.should.have.property('name', 'Wingspan');
        item.should.have.property('imageUrl', 'https://lautapelit.fi/tuotekuvat/520x520/Wingspan_3D.jpg');
        item.should.have.property('price', 55);
        item.should.have.property('available', true);
        item.should.have.property('itemUrl', 'https://lautapelit.fi/searchproduct/36885/wingspan');
        item.should.have.property('currency', '€');

        item = res[1]
        item.should.have.property('name', 'Wingspan European exp (ENG)');
        item.should.have.property('imageUrl', 'https://lautapelit.fi/tuotekuvat/520x520/2014_eikuvaa3.jpg');
        item.should.have.property('available', false);
        item.should.have.property('itemUrl', 'https://lautapelit.fi/searchproduct/31999/wingspan');
    })

    it("Fantasiapelit", async function(){
        let qs = 'dungeon%20lords'
        nock('https://www.fantasiapelit.com')
        .get('/index.php?main=ai&mista=*&avaa_suodin=1&on_luokka=lautapeli%2Fseurapeli&etsittava=' + qs)
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

    xit("Puolenkuunpelit", async function(){
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

    it("Poromagia", async function(){
        let qs = 'spirint%20island'
        nock('https://lautapelit.poromagia.com')
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

    it("Poromagia Discount", async function(){
        let qs = 'forgotten%20waters'
        nock('https://lautapelit.poromagia.com')
        .get('/en/search/?q=' + qs)
        .reply(200, mockResponses.RESPONSE_POROMAGIA_2)

        res = await poromagia(qs)
        item = res[0]
        item.should.have.property('name', 'Forgotten Waters');
        item.should.have.property('price', 44.96);
        item.should.have.property('available', true);
        item.should.have.property('currency', '€');
    })

    it("Pelipeikko", async function(){
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

    xit("Philibertnet", async function(){
        let qs = 'spirint%20island'
        nock('https://www.philibertnet.com')
        .get('/en/search?ajaxSearch=1&id_lang=2&q=' + qs)
        .reply(200, mockResponses.RESPONSE_PHILIBERTNET)
        .get('/en/greater-than-games-llc/53139-spirit-island-core-game-798304339291.html')
        .reply(200, mockResponses.RESPONSE_PHILIBERTNET_SPIRIT_ISLAND)
        .get('/en/folded-space/78145-spirit-island-insert-3800500972596.html')
        .reply(200, mockResponses.RESPONSE_PHILIBERTNET_SPIRIT_ISLAND_INSERT)

        res = await philibertnet(qs)
        item = res[0]
        item.should.have.property('name', 'Spirit Island Core Game');
        item.should.have.property('imageUrl', 'https://cdn3.philibertnet.com/404309-large_default/spirit-island.jpg');
        item.should.have.property('price', 71.95);
        item.should.have.property('available', false);
        item.should.have.property('itemUrl', 'https://www.philibertnet.com/en/greater-than-games-llc/53139-spirit-island-core-game-798304339291.html');
        item.should.have.property('currency', '€');

        item = res[1]
        item.should.have.property('price', 15.95);
        item.should.have.property('available', false);
    })
})
