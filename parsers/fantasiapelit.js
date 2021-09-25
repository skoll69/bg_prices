const rp = require('request-promise')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const baseUrl = 'https://www.fantasiapelit.com/index.php?main=ai&mista=*&avaa_suodin=1&on_luokka=lautapeli%2Fseurapeli&etsittava='

async function query(querystring){
    let data = await rp(baseUrl + querystring, {gzip: false})
    let { document } = (new JSDOM(data)).window
    let items = document.querySelectorAll('.centruutu')
    let out = [];
    for (const el of items) {
        out.push({
            name: el.querySelector('.selausruutunimi').textContent,
            imageUrl: 'https://fantasiapelit.com/' + el.querySelector('img').getAttribute('src'),
            price: getPrice(el),
            available: getAvailability(el),
            itemUrl: 'https://fantasiapelit.com/' + el.firstChild.getAttribute('href'),
            currency: '€',
        })
    }

    return out;
}

function getPrice(el){
    let priceDiv = el.childNodes[1].childNodes[2]
    if(priceDiv.firstChild.hasChildNodes()){
        priceDiv.removeChild(priceDiv.firstChild)
    }
    price = priceDiv.textContent
    return Number(price.replace('€', '').trim())
}

function getAvailability(el){
    let text = el.querySelector('.ruutuhinta').textContent
    return text.includes('heti saatavilla')
}

module.exports = query
