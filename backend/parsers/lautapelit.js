const rp = require('request-promise')
const request = require('request')

const baseUrl = 'https://www.lautapelit.fi/sysNet/getProductsJSON/getProductsJSON.aspx?sua=1&lang=1&reID=1&sanaHaku='

async function query(querystring){
    let url = 'https://www.lautapelit.fi/sysNet/getProductsJSON/getProductsJSON.aspx?sua=1&lang=1&reID=1&sanaHaku=dungeon%20petz';
    let data = await rp(url, {json: true, gzip: true})
    let out = [];
    for (const el of data) {
        let availabilityUrl = `https://www.lautapelit.fi/getVarastosaldoJSON.asp?sua=1&lang=1&s=${el.SivuID}&tID=${el.TuoteID}`
        let availabilityData = await rp(availabilityUrl, {json: true, gzip: true})
        out.push({
            name: el.Tuote,
            imageUrl: el.Kuva,
            price: el.Hinta,
            available: availabilityData.Mera[0].VarastoSaldo > 0,
            itemUrl: 'https://www.fantasiapelit.com/',
            currency: '€',
        })
    }

    return out;
}

module.exports = query
