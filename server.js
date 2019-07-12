const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");
const bodyParser = require("body-parser");
const userRoute = require("./routes/studentRoute");
const db = require("./models");

// // share static files
// app.use("/static", express.static(path.join(__dirname, "public")));

// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// // import routes
// const userRoute = require("./routes/studentRoute");
// app.use(userRoute);

// setup db connection and express router connection
db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => console.log("listening on PORT:", PORT));
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
// import routes

app.use(userRoute);
