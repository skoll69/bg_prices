const rp = require('request-promise')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const baseUrl = 'https://www.puolenkuunpelit.com/kauppa/advanced_search_result.php?manufacturers_id=23&keywords='

async function query(querystring){
    let data = await rp(baseUrl + querystring, {gzip: false})
    let { document } = (new JSDOM(data)).window
    let items = document.querySelectorAll('.productListing-data')
    let out = [];
    for(let i = 0; i < items.length-1; i+=5) {
        out.push({
            name: items[i+1].childNodes[1].childNodes[1].textContent,
            imageUrl: 'https://www.puolenkuunpelit.com/kauppa/' + items[i].firstChild.firstChild.getAttribute('src'),
            price: getPrice(items[i+2]),
            available: items[i+1].childNodes[6].getAttribute('src') == 'images/varastotuote_veryvihrea.gif',
            itemUrl: items[i].firstChild.getAttribute('href').replace('http:', 'https:'),
            currency: '€',
        })
    }

    return out;
}

function getPrice(el){
    let price
    if(el.firstChild.childNodes.length == 3){
        price = el.firstChild.childNodes[2].textContent
    } else {
        price = el.firstChild.firstChild.textContent
    }
    return Number(price.slice(0, -3))
}

module.exports = query
