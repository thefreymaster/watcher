const express = require('express')
const path = require('path')
const app = express()

app.use((req, res, next) => {
  if (req.secure) {
    next()
  }
  else {
    res.redirect(`https://${req.headers.host}${req.url}`)
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



const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`API listening on port ${port}...`)
})