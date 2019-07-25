const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 5000;

// CONFIGURING BODY PARSER FOR AJAX REQUEST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// SERVING UP STATIC ASSETS
app.use(express.static('client/build'));

//ADD ROUTES
app.use(routes);

// CONNECTING TO DATABASE

// START SERVER
app.listen(PORT, function() {
  console.log(`Server now listening on port ${PORT}!`);
});
