const querystring = require('querystring');
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/a', (req, res) => {
    req.url = '/es/a'
    console.log("Going there")
    console.log(Object.keys(req))
    req.baseUrl = req.url
    req.originalUrl = req.url
    req._parsedUrl = req.url
    req.query = querystring.parse('/es/a')
    req.route.path = '/es/a'
    console.log(JSON.stringify(req.complete))
    return app.render(req, res, '/es/a', req.query)
  })

  server.get('/_next/data/development/a.json', (req, res) => {
    req.url = '/_next/data/development/es/a.json'
    return app.render(req, res, req.url, req.query)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
