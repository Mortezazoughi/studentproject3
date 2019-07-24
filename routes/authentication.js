// const basicAuth = require("basic-auth");

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
        res.status(404);
      }
    } else {
      //if user does not exist
      res.status(404);
    }
  } else {
    //if name and password are empty
    const message = "Both Username and password are required";
    // res.sendStatus(404).json({ message });
    res.status(404);
  }
};
const studentauthMiddleware = async (req, res, next) => {
  //grabs the user authentication details from client/postman
  // console.log(req.body);
  // console.log(basicAuth);

  // const usercredentials = basicAuth(req);

  // console.log("user cred", usercredentials);
  // console.log("user cred", usercredentials);

  const { email, pass } = req.body;
  // console.log(email, pass);
  const enteredpassword = pass;
  //checks to ensure that email and password fields are not empty
  if (!email || !enteredpassword) {
    const message = "Both Username and password are required";
    // res.sendStatus(404).json({ message });
    res.status(404).json({ message: message });
    return;
  }

  //compare user entered password vs db password
  let user;
  try {
    user = await db.Student.findOne({
      where: {
        email: email
      }
    });
  } catch (error) {
    //if server error
    res.status(500);
  }

  //if user email exists proceed
  if (user) {
    //compare input password to stored password
    const savedpasword = user.dataValues.password;
    let match;
    try {
      match = await bcrypt.compareSync(enteredpassword, savedpasword);
    } catch (error) {
      res.status(500);
    }
    console.log("**email", match);
    //if username and password match proceed to next
    if (match) {
      // res.sendStatus(200);
      console.log("**before next", match);
      req.user = user;
      next();
      return;
    } else {
      res.status(404);
      return;
    }
  } else {
    //if user does not exist
    res.status(404);
    return;
  }
};

module.exports = {
  profauthorizationMiddleware,
  studentauthMiddleware
};
