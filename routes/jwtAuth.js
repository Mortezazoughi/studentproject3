const jwt = require("jsonwebtoken");
// verify header
verifyToken = (req, res, next) => {
  console.log(req.headers);
  // get auth header value
  const bearerHeader = req.headers["authorization"];
  // check if bearer is undefined

  if (typeof bearerHeader !== "undefined") {
    //split bearer token
    const bearer = bearerHeader.split(" ");
    //get token from array
    const bearerToken = bearer[1];

    // set the token
    req.token = bearerToken;

    // next middleware
    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        console.log("inside JWT", err);
        res
          .status(500)
          .json({
            message: "Your token is invalid, please sign In once again"
          });
        return;
      }
      next();
    });
  } else {
    console.log("no bearer");
    res.sendStatus(403);
    return;
  }
};
module.exports = verifyToken;
