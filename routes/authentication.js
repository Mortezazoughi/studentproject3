const basicAuth = require("basic-auth");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
//calling student model that contains the password
const db = require("../models");

const authorizationMiddleware = async (req, res, next) => {
  let user;
  const usercredentials = basicAuth(req);
  console.log(usercredentials);

  if (usercredentials) {
    // check db to confirm that the email exists
    user = await db.Professor.findAll({
      where: {
        email: usercredentials.name
      }
    });

    if (user) {
      let match;
      try {
        match = await bcrypt.compareSync(
          usercredentials.pass,
          user[0].dataValues.password
        );
      } catch (err) {
        console.log("error with match", err);
      }
      console.log("the match is", match);

      if (match) {
        console.log("after Match");

        next();
      } else {
        console.log("error after match");

        // const message = `Invalid password for user ${user.email}`;
        res.sendStatus(401);
      }
    } else {
      console.log("***USER DOES NOT EXIST*****");
      res.sendStatus(404);
    }
  } else {
    console.log("****EMAIL DOES NOT EXIST");
    res.sendStatus(404);
  }
};

module.exports = {
  authorizationMiddleware
};
