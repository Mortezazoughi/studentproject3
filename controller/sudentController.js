const bcrypt = require("bcryptjs");
const saltRounds = 10;
const db = require("../models");
const validationChain = require("../routes/validationChain");
const studentController = {
  signup: async (req, res) => {
    console.log(req.body);
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      campus,
      password,
      confirmpassword
    } = req.body;
    let result;
    // Hashing the password and confirmpassword
    const hashedpassword = bcrypt.hashSync(password, saltRounds);
    const hashedconfirmpassword = bcrypt.hashSync(confirmpassword, saltRounds);
    console.log(hashedpassword);
    //writing to the student table
    try {
      result = await db.Student.create({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        campus: campus,
        password: hashedpassword,
        confirmpassword: hashedconfirmpassword
      });
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  }
};
module.exports = studentController;
