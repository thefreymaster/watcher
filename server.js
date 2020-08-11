const express = require('express')
const path = require('path')
const app = express()
const environment = app.get('env');
const axios = require('axios');

const BASE_URL = "https://evanfreymiller-2020.firebaseio.com/";

app.use((req, res, next) => {
  console.log({ secure: req.secure })
  if (req.headers["x-forwarded-proto"] === "https" || environment === "development") {
    next()
  }
  else {
    res.status(301).redirect(`https://${req.headers.host}${req.url}`)
  }
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(__dirname + '/build'));
  app.set('x-powered-by', false);
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

app.get('/api/info', (req, res) => {
  axios.get(`${BASE_URL}/info.json`).then((response) => {
    res.send(response.data)
  })
})

const port = process.env.PORT || 9900
app.listen(port, () => {
  console.log(`API listening on port ${port}...`)
})