const rp = require('request-promise')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const baseUrl = 'https://poromagia.com/en/search/?q='

async function query(querystring){
    let data = await rp(baseUrl + querystring, {gzip: false})
    let { document } = (new JSDOM(data)).window
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
    return Number(getPriceContainer(el).firstChild.firstChild.textContent.replace('€', '').replace(',', '.'))
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


// function get_price_from_html(\DOMElement $data){
//     return str_replace("€", "", get_price_container($data)->firstChild->firstChild->nodeValue);

// }

// function get_url_from_html(\DOMElement $data){
//     return "http://www.poromagia.com".$data->childNodes->item(1)->firstChild->firstChild->getAttribute('href');
// }

// function get_image_url_from_html(\DOMElement $data){
//     return "http://www.poromagia.com".$data->firstChild->firstChild->firstChild->firstChild->getAttribute('src');
// }

// function get_availability_from_html(\DOMElement $data){
//     $item = get_price_container($data);
//     if ($item->childNodes->length == 2){
//         return strpos($item->childNodes->item(1)->firstChild->nodeValue, 'In stock') !== false;
//     } else {
//         return strpos($item->childNodes->item(1)->nodeValue, 'In stock') !== false;
//     }
//     return strpos(get_price_container($data)->firstChild->nodeValue, 'In stock') !== false;
// }

// function get_price_container($data){
//     if ($data->childNodes->length == 3) {
//         return $data->lastChild->firstChild->childNodes->item(1)->firstChild;
//     } else {
//         return $data->lastChild->childNodes->item(1)->childNodes->item(1)->firstChild;
//     }
// }
