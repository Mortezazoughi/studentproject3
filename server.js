const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");
// share static files
app.use("/static", express.static(path.join(__dirname, "public")));

// import routes
const userRoute = require("./routes/studentRoute");
app.use(userRoute);

// Parse application body as JSON
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

// setup db connection
const db = require("./models");
db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => console.log("listening on PORT:", PORT));
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
