const express = require('express');
const cors = require('cors')

const HANDLERS = {
    lautapelit: './parsers/lautapelit.js',
    fantasiapelit: './parsers/fantasiapelit.js',
    puolenkuunpelit: './parsers/puolenkuunpelit.js',
    poromagia: './parsers/poromagia.js',
    pelipeikko: './parsers/pelipeikko.js',
    philibertnet: './parsers/philibertnet.js',
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
    const handler = require(HANDLERS[shop])
    res.json({
        shop: shop,
        data: await handler(req.params.querystring)
    })
})

app.use(express.static('public'))

module.exports = app

// const server = app.listen(3000)

