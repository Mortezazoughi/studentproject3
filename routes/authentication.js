const basicAuth = require("basic-auth");
const bcrypt = require("bcryptjs");
//calling  model that contains the password
const db = require("../models");

const profauthorizationMiddleware = async (req, res, next) => {
  //grabs the user authentication details from client/postman
  const usercredentials = basicAuth(req);
  const { name, pass } = usercredentials;
  const enteredpassword = pass;
  //checks to ensure that name and password fields are not empty
  if (name && enteredpassword) {
    console.log(usercredentials);

    //compare user entered password vs db password
    let user;
    try {
      user = await db.Professor.findOne({
        where: {
          email: name
        }
      });
    } catch (error) {
      //if server error
      res.sendStatus(500);
    }
    //if user email exists proceed
    if (user) {
      console.log(user);

      //compare input password to stored password
      const savedpasword = user.dataValues.password;
      let match;
      try {
        match = await bcrypt.compareSync(enteredpassword, savedpasword);
      } catch (error) {
        res.sendStatus(500);
      }
      //if username and password match proceed to next
      if (match) {
        // res.sendStatus(200);
        console.log(match);

        next();
      } else {
        res.sendStatus(404);
      }
    } else {
      //if user does not exist
      res.sendStatus(404);
    }
  } else {
    //if name and password are empty
    const message = "Both Username and password are required";
    // res.sendStatus(404).json({ message });
    res.sendStatus(404);
  }
};
const studentauthMiddleware = async (req, res, next) => {
  //grabs the user authentication details from client/postman
  const usercredentials = basicAuth(req);
  const { name, pass } = usercredentials;
  const enteredpassword = pass;
  //checks to ensure that name and password fields are not empty
  if (name && enteredpassword) {
    console.log(usercredentials);

    //compare user entered password vs db password
    let user;
    try {
      user = await db.Student.findOne({
        where: {
          email: name
        }
      });
    } catch (error) {
      //if server error
      res.sendStatus(500);
    }
    //if user email exists proceed
    if (user) {
      //compare input password to stored password
      const savedpasword = user.dataValues.password;
      let match;
      try {
        match = await bcrypt.compareSync(enteredpassword, savedpasword);
      } catch (error) {
        res.sendStatus(500);
      }
      console.log("**email");
      //if username and password match proceed to next
      if (match) {
        // res.sendStatus(200);
        next();
      } else {
        res.sendStatus(404);
      }
    } else {
      //if user does not exist
      res.sendStatus(404);
    }
  } else {
    //if name and password are empty
    const message = "Both Username and password are required";
    // res.sendStatus(404).json({ message });
    res.sendStatus(403);
  }
};
module.exports = {
  profauthorizationMiddleware,
  studentauthMiddleware
};
