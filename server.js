const express = require('express')
const path = require('path')
const app = express()

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(__dirname + '/build'));
  app.set('x-powered-by', false);
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

const ensureSecure = (req, res, next) => {
  const redirectURL = `https://${req.hostname}${req.url}`;
  if (req.headers["x-forwarded-proto"] === "https" || environment === "development") {
      return next();
  }
  else {
      res.status(301).redirect(redirectURL);
  }
}
app.use(ensureSecure);

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`API listening on port ${port}...`)
})