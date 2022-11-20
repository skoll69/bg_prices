const rp = require('request-promise')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// const baseUrl = 'https://www.philibertnet.com/en/search?ajaxSearch=1&id_lang=2&q='
const baseUrl = 'https://eu1-search.doofinder.com/5/search?hashid=f449cb434a44c266d349556844fbe0a8&query_counter=5&page=1&rpp=30&transformer=basic&query='

async function query(querystring){
    let data = await rp(baseUrl + querystring, {json: true, gzip: false, headers: {origin: 'https://www.philibertnet.com'}})
    let out = [];
    for (const item of data.results) {
        out.push({
            name: item.title,
            imageUrl: item.image_link,
            price: _getPrice(item),
            available: undefined,
            itemUrl: item.link,
            currency: '€',
        })
    }

    return out;
}

module.exports = query

function _getPrice(item) {
    return item.sale_price || item.price;
}
