const express = require('express');
const cors = require('cors')

const HANDLERS = {
    lautapelit: './parsers/lautapelit.js',
    fantasiapelit: './parsers/fantasiapelit.js',
}

const app = express()

app.use(cors())

app.get('/handlers', (req, res) => {
    res.json(Object.keys(HANDLERS))
})


app.get('/query/:shop/:querystring', (req, res) => {
    const shop = req.params.shop
    if (!(shop in HANDLERS)){
        return res.json({error: 'invalid_handler'})
    }
    const handler = require(HANDLERS[shop])
    res.json({
        shop: shop,
        data: handler(req.params.querystring)
    })
})

app.use(express.static('public'))

const server = app.listen(3000)

// For unit testing
module.exports = server
