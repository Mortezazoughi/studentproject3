const jwt = require("jsonwebtoken");
// verify header
verifyToken = (req, res, next) => {
  // get auth header value
  const bearerHeader = req.headers["authorization"];
  // check if bearer is undefined
  console.log(bearerHeader);

  if (typeof bearerHeader !== "undefined") {
    //split bearer token
    const bearer = bearerHeader.split(" ");
    //get token from array
    const bearerToken = bearer[1];
    // set the token
    req.token = bearerToken;
    // next middleware
    next();
  } else {
    res.sendStatus(403);
  }
};
module.exports = verifyToken;
