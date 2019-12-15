const rp = require('request-promise')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const baseUrl = 'https://pelipeikko.fi/en/search?s='

async function query(querystring){
    let html = await rp(baseUrl + querystring)
    let { document } = (new JSDOM(html)).window
    let items = document.querySelectorAll('.product_item')
    let out = [];
    for (const el of items) {
        let url = el.childNodes[1].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[1].getAttribute('href')
        out.push({
            name: el.childNodes[1].childNodes[3].childNodes[1].textContent,
            imageUrl: el.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[1].getAttribute('src'),
            price: getPrice(el),
            available: await getAvailability(url),
            itemUrl: url,
            currency: '€',
        })
    }

    return out;
}

function getPrice(el){
    let price = el.childNodes[1].childNodes[3].childNodes[3].childNodes[1].textContent
    return Number(price.replace('€', ''))
}

async function getAvailability(url){
    let html = await rp(url)
    let { document } = (new JSDOM(html)).window
    let data = document.querySelectorAll('#product-availability')
    let $availabilityString = data[0].textContent
    return $availabilityString.includes('In Stock')
}

module.exports = query
