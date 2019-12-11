const rp = require('request-promise')
//const request = require('request')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const baseUrl = 'https://www.fantasiapelit.com/index.php?main=ai&mista=*&jamista=luokka&jamika=lautapeli/seurapeli&yhteen=eri&alue=&etsittava='

async function query(querystring){
    let data = await rp(baseUrl + querystring, {gzip: false})
    let { document } = (new JSDOM(data)).window
    let items = document.querySelectorAll('.centruutu')
    let out = [];
    for (const el of items) {
        console.log(el.firstChild.firstChild.childNodes[2].getAttribute('src'))
        out.push({
            name: el.firstChild.firstChild.firstChild.textContent,
            imageUrl: 'https://fantasiapelit.com/' + el.firstChild.firstChild.childNodes[2].getAttribute('src'),
            price: el.Hinta,
            //available: availabilityData.Mera[0].VarastoSaldo > 0,
            itemUrl: 'http://www.lautapelit.fi/product.asp?sua=1&lang=1&s=' + el.SivuID,
            currency: '€',
        })
    }

    return out;
}

module.exports = query
