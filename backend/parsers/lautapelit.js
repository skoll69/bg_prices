const rp = require('request-promise')
const request = require('request')

const baseUrl = 'http://www.lautapelit.fi/sysNet/getProductsJSON/getProductsJSON.aspx?sua=1&lang=1&reID=1&sanaHaku='

async function query(querystring){
    let url = 'https://www.lautapelit.fi/sysNet/getProductsJSON/getProductsJSON.aspx?sua=1&lang=1&reID=1&sanaHaku=dungeon%20petz';
    let data = await rp(url, {json: true, gzip: true})
    let out = [];

    data.forEach(el => {
        //let availabilityUrl = `http://www.lautapelit.fi/getVarastosaldoJSON.asp?sua=1&lang=1&s=${el.SivuID}&tID=${el.TuoteID}`
        //let availabilityData = await rp(url, {json: true})

        out.push({
            name: el.Tuote,
            imageUrl: el.Kuva,
            price: el.Hinta,
            //available: availabilityData.Mera.VarastoSaldo > 0,
            available: 1 > 0,
            itemUrl: 'https://www.fantasiapelit.com/',
            currency: '€',
        })
    });

    return out;
}

module.exports = query
