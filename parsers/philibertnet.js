const rp = require('request-promise')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const baseUrl = 'https://www.philibertnet.com/en/search?ajaxSearch=1&id_lang=2&q='

async function query(querystring){
    let data = await rp(baseUrl + querystring, {json: true, gzip: false})
    let out = [];
    for (const el of data) {
        let html = await rp(el.product_link)
        let { document } = (new JSDOM(html)).window
        out.push({
            name: el.pname,
            imageUrl: document.querySelectorAll('#bigpic')[0].getAttribute('data-src'),
            price: Number(document.querySelectorAll('#our_price_display')[0].getAttribute('content')),
            available: document.querySelectorAll('#availability_value')[0].getAttribute('class').includes('label-success'),
            itemUrl: el.product_link,
            currency: '€',
        })
    }

    return out;
}

module.exports = query
