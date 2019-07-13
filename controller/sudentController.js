const bcrypt = require("bcryptjs");
const saltRounds = 10;
const db = require("../models");
const validationChain = require("../routes/validationChain");
const studentController = {
  signup: async (req, res) => {
    // console.log(req.body);
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      campus,
      password,
      confirmpassword
    } = req.body;
    //check if password and confirmpassword match if not send a 422
    if (password != confirmpassword) {
      res.send(422).redirect("/signup");
    }

    //check if user exists in the db before you do anything else
    db.Student.findOne(
      {
        where: {
          email: email
        }
      },
      function(err, user) {
        console.log("one");

        if (err) {
          console.log(err);
        }
        console.log("two");
        let message;
        if (user) {
          // console.log("Three");
          message = "user exists";
          console.log(message);
        } else {
          // console.log("Four");
          message = "user doesn't exist";
          console.log(message);
        }
        // console.log("Five");
        res.json({ message: message });
      }
    );

    // else {
    //   let result;
    //   // Hashing the password and confirmpassword
    //   const hashedpassword = bcrypt.hashSync(password, saltRounds);
    //   const hashedconfirmpassword = bcrypt.hashSync(
    //     confirmpassword,
    //     saltRounds
    //   );
    //   console.log(hashedpassword);
    //   //writing to the student table
    //   try {
    //     result = await db.Student.create({
    //       firstName: firstName,
    //       lastName: lastName,
    //       phoneNumber: phoneNumber,
    //       email: email,
    //       campus: campus,
    //       password: hashedpassword,
    //       confirmpassword: hashedconfirmpassword
    //     });
    //     res.send(result);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  }
};
module.exports = studentController;
