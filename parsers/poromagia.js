const rp = require('request-promise')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const baseUrl = 'https://poromagia.com/en/search/?q='

async function query(querystring){
    let html = await rp(baseUrl + querystring)
    let { document } = (new JSDOM(html)).window
    let items = document.querySelectorAll('.product_line')
    let out = [];
    for (const el of items) {
        let price = getPrice(el)
        if (price < 2){
            continue
        }
        out.push({
            name: el.childNodes[1].firstChild.firstChild.textContent,
            imageUrl: 'https://poromagia.com' + el.firstChild.firstChild.firstChild.firstChild.getAttribute('src'),
            price: price,
            available: getAvailability(el),
            itemUrl: 'https://poromagia.com' + el.childNodes[1].firstChild.firstChild.getAttribute('href'),
            currency: '€',
        })
    }

    return out;
}

function getPrice(el){
    let priceCell = getPriceContainer(el).firstChild.firstChild;
    if (priceCell.className.includes('strike')) {
        priceCell = getPriceContainer(el).firstChild.childNodes[2];
    }
    return Number(priceCell.textContent.replace('€', '').replace(',', '.'))
}

function getAvailability(el){
    el = getPriceContainer(el)
    if(el.childNodes.length == 2){
        return el.childNodes[1].firstChild.textContent.includes('In stock')
    } else {
        return el.childNodes[1].textContent.includes('In stock')
    }
}

function getPriceContainer(el){
    if(el.childNodes.length == 3){
        return el.lastChild.firstChild.childNodes[1].firstChild
    } else {
        return el.lastChild.childNodes[1].childNodes[1].firstChild
    }
}

module.exports = query
