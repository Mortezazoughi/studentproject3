const basicAuth = require("basic-auth");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
//calling student model that contains the password
const db = require("../models");

var authorizationMiddleware = async (req, res, next) => {
  var usercredentials = basicAuth(req);
  console.log(usercredentials);

  if (usercredentials) {
    // check db to confirm that the email exists
    const user = db.Professor.findAll({
      where: {
        email: usercredentials.name
      }
    });
    console.log("after user cred", user);
    if (user) {
      const match = await bcrypt.compareSync(
        user.password,
        db.Professor.password
      );
      // console.log();

      if (correctPassword) {
        next();
      } else {
        const message = `Invalid password for user ${user.email}`;
        res.sendStatus(401).json({ message: message });
      }
    }
  }
};
// } else {
//   const message = " invalida useremail. Please try again";
//   res.sendStatus(401).json({ message: message });
// }

// if (!user || !user.name || !user.pass) {
//   res.set("WWW-Authenticate", "Basic realm=Authorization Required");
//   res.sendStatus(401);
// }
// if (user.name === "amy" && user.pass === "passwd123") {
//   next();
// } else {
//   res.set("WWW-Authenticate", "Basic realm=Authorization Required");
//   res.sendStatus(401);
// }

module.exports = authorizationMiddleware;

// if email exist, compare the password entered to the password saved in the db
//  if (user) {
//   // Load hash from your password DB.
//   console.log(user.password);
//   console.log(Professor.password);

//   bcrypt.compareSync(user.password, Professor.password);
//   if (correctPassword) {
//     next();
//   } else {
//     const message = `Invalid password for user ${user.email}`;
//     res.sendStatus(401).json({ message: message });
//   }
// } else {
//   const message = " invalida useremail. Please try again";
//   res.sendStatus(401).json({ message: message });
// }
