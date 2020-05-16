const rp = require('request-promise')

const baseUrl = 'https://www.lautapelit.fi/sysNet/getProductsJSON/getProductsJSON.aspx?sua=1&lang=1&reID=1&sanaHaku='

async function query(querystring){
    let data = await rp(baseUrl + querystring, {json: true, gzip: true})
    let out = [];
    for (const el of data) {
        let availabilityUrl = `https://www.lautapelit.fi/getVarastosaldoJSON.asp?sua=1&lang=1&s=${el.SivuID}&tID=${el.TuoteID}`
        let availabilityData = await rp(availabilityUrl, {json: true, gzip: true})
        out.push({
            name: el.Tuote,
            imageUrl: 'https://lautapelit.fi/' + (el.Kuva && el.Kuva.includes('tuotekuvat') ? '' : 'images/tuotekuvat/') + el.Kuva,
            price: el.Hinta,
            available: availabilityData.Mera[0].VarastoSaldo > 0,
            itemUrl: 'http://www.lautapelit.fi/product.asp?sua=1&lang=1&s=' + el.SivuID,
            currency: '€',
        })
    }

    return out;
}

module.exports = query
