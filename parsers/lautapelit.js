const rp = require('request-promise')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const baseUrl = 'https://lautapelit.fi/search/?q='

async function query(querystring){
    let data = await rp(baseUrl + querystring, {gzip: false})
    let { document } = (new JSDOM(data)).window
    let items = document.querySelectorAll('.SearchResults .ContentSection .Grid .GridList .ListItem .Product')
    let out = [];
    for(const item of items) {
        const { document } = (new JSDOM(item.innerHTML)).window;
        out.push({
            name: document.querySelector('.ProductName').textContent.trim(),
            imageUrl: 'https://lautapelit.fi' + document.querySelector('.ProductImageContainer img').getAttribute('data-src'),
            price: Number(document.querySelector('.ProductPrice').textContent.trim().slice(0, -5)),
            available: item.className.includes('Available'),
            itemUrl: 'https://lautapelit.fi' + document.querySelector('.ProductImage').getAttribute('href'),
            currency: '€',
        })
    }

    return out;
}

module.exports = query
