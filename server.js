const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');
const bodyParser = require('body-parser');
const userRoute = require('./routes/studentRoute');
const profRoute = require('./routes/professorRoute');
const db = require('./models');
var cors = require('cors');

// // share static files
// app.use("/static", express.static(path.join(__dirname, "public")));

if (process.env.NODE_ENV === 'production') {
  console.log('running in prod');
  app.use(express.static('client/build'));
}

// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(cors());

// setup db connection and express router connection
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(PORT, () => console.log('listening on PORT:', PORT));
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// import routes
app.use(userRoute, profRoute);

// Testing basic authx
