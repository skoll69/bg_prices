const express = require('express');
const cors = require('cors')

const HANDLERS = {
    lautapelit: require('./parsers/lautapelit.js'),
    fantasiapelit: require('./parsers/fantasiapelit.js'),
    // puolenkuunpelit: require('./parsers/puolenkuunpelit.js'),
    poromagia: require('./parsers/poromagia.js'),
    pelipeikko: require('./parsers/pelipeikko.js'),
    // philibertnet: require('./parsers/philibertnet.js'),
}

const app = express()

app.use(cors())

app.get('/handlers', (req, res) => {
    res.json(Object.keys(HANDLERS))
})


app.get('/query/:shop/:querystring', async (req, res) => {
    const shop = req.params.shop
    if (!(shop in HANDLERS)){
        return res.json({error: 'invalid_handler'})
    }
    const handler = HANDLERS[shop]
    res.json({
        shop: shop,
        data: await handler(req.params.querystring)
    })
})

app.use(express.static('static'))

module.exports = app
