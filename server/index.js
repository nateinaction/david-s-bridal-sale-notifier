// @flow

import express from 'express'
import request from 'request'
import cheerio from 'cheerio'

const url = 'http://www.davidsbridal.com/Product_lace-keyhole-tie-back-halter-dress-12089_dresses-new-arrivals'
//const url = 'http://www.davidsbridal.com/Product_trumpet-wedding-dress-with-lace-appliques-op1267_sale-wedding-dresses'

const fetchWebPage = (url) => (
  request(url, (err, res, html) => {
    if (!err && res.statusCode == 200) {
      return html
    }
    return err
  })
)

const scrapePrice = (html) => {
  const $ = cheerio.load(html)
  const priceScript = $('.product-price script').text()
  const regex = new RegExp('(?:usdMinPrice = )([0-9.]+)')
  const result = regex.exec(priceScript) || null
  if (result !== null) {
    return result
  }
  return 'No price found'
}

const checkPrice = (url) => {
  const html = fetchWebPage(url)
  return scrapePrice(html)
}

//console.log(checkPrice(url))

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('hello world')
})
/*
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
*/
