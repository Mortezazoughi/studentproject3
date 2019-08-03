// const basicAuth = require("basic-auth");

const bcrypt = require("bcryptjs");
//calling  model that contains the password
const db = require("../models");

const profauthorizationMiddleware = async (req, res, next) => {
  //grabs the user authentication details from client/postman

  const usercredentials = req.body;

  const { email, password } = usercredentials;
  const enteredpassword = password;
  //checks to ensure that name and password fields are not empty
  if (!email || !enteredpassword) {
    res
      .status(404)
      .json({ message: "Both Username and password are required" });
  }
  // console.log(usercredentials);

  //compare user entered password vs db password
  let user;
  try {
    user = await db.Professor.findOne({
      where: {
        email: email
      }
    });
  } catch (error) {
    //if server error
    res.status(500).json({ message: error });
    return;
  }
  //if user email exists proceed
  if (!user) {
    res.status(404).json({ message: "Either email or password is incorrect" });
    return;
  }

  //compare input password to stored password
  const savedpasword = user.dataValues.password;
  let match;
  try {
    match = await bcrypt.compareSync(enteredpassword, savedpasword);
  } catch (error) {
    res.sendStatus(500).json({ message: "We broke it on our side" });
    return;
  }
  //if username and password match proceed to next
  if (!match) {
    res.status(404).json({ message: "Either email or password is incorrect" });
  }
  console.log("****BDSD***", user.dataValues.id);
  userid = user.dataValues.id;
  next();
};
const studentauthMiddleware = async (req, res, next) => {
  const { email, pass } = req.body;
  // console.log(email, pass);
  const enteredpassword = pass;
  //checks to ensure that email and password fields are not empty
  if (!email || !enteredpassword) {
    const message = "Both Username and password are required";
    // res.sendStatus(404).json({ message });
    res.status(403).json({ message: message });
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
  // if (user) {
  if (!user) {
    const message = "Either username or password is incorrect";
    res.status(404).json({ message: message });
    return;
  }
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
    req.user = user;
    next();
    return;
  } else {
    const message = "Either username or password is incorrect";
    res.status(404).json({ message: message });
    return;
  }
};
module.exports = {
  profauthorizationMiddleware,
  studentauthMiddleware
};
