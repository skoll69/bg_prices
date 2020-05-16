const rp = require('request-promise')
const jsdom = require("jsdom");

const baseUrl = 'https://pelipeikko.fi/fi/search?s='

async function query(querystring){
    let data = await rp({
        uri: baseUrl + querystring,
        gzip: false,
        json: true,
        headers: {accept: 'application/json'}
    })
    let out = [];
    for (const item of data.products) {
        out.push({
            name: item.name,
            imageUrl: item.cover.medium.url,
            price: item.price_amount,
            available: Boolean(item.add_to_cart_url),
            itemUrl: item.url,
            currency: '€',
        })
    }

    return out;
}

module.exports = query
