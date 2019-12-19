const rp = require('request-promise')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const baseUrl = 'https://www.philibertnet.com/en/search?ajaxSearch=1&id_lang=2&q='

async function query(querystring){
    let data = await rp(baseUrl + querystring, {json: true, gzip: false})
    console.log()
    let out = [];
    for (const el of data) {
        console.log(el)
        let html = await rp(el.product_link)
        let { document } = (new JSDOM(html)).window
        out.push({
            name: el.pname,
            imageUrl: document.querySelectorAll('#bigpic')[0].getAttribute('data-src'),
            //price: el.Hinta,
            //available: availabilityData.Mera[0].VarastoSaldo > 0,
            itemUrl: el.product_link,
            currency: '€',
        })
    }

    return out;
}

module.exports = query
