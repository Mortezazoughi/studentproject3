const bcrypt = require("bcryptjs");
const saltRounds = 10;
const db = require("../models");
const validationChain = require("../routes/validationChain");
const studentController = {
  studentSignup: async (req, res) => {
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
    // compare input passwords
    if (password === confirmpassword) {
      checkforStudent = await db.Student.count({
        where: {
          email: email
        }
      });
      //check if professor already exists in the database
      //If does not exist go ahead and create a new prof
      if (checkforStudent === 0) {
        let results;
        //hash password and confirmpassword before storing to db
        const hashedpassword = bcrypt.hashSync(password, saltRounds);
        const hashedconfirmpassword = bcrypt.hashSync(
          confirmpassword,
          saltRounds
        );
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
          console.log("Somthing is wrong");
          console.log(error);

          res.sendStatus(403);
        }
      } else {
        console.log("person Already exists");
        res.sendStatus(403);
      }
    } else {
      console.log("passwords dont match");
      res.sendStatus(403);
    }
  },

  updatestudent: async (req, res) => {
    const { email } = req.body;
    const student = await db.Student.count({
      where: {
        email: email
      }
    });

    if (student == 1) {
      let result;
      try {
        result = await db.Student.update(req.body, {
          where: {
            email: req.body.email
          }
        });
        res.send(result);
      } catch (error) {
        console.log(error);
        res.send(error);
      }
    }
  },
  searchallcourses: async (req, res) => {
    let result;
    try {
      result = await db.Course.findAll();
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  },
  registerforclass: async (req, res) => {
    const { courseName } = req.body;
    // search for course
    const checkcourse = await db.Course.findAll({
      where: {
        courseName
      }
    });

    if (checkcourse) {
      let results;
      try {
        results = await db.StudentCourse.create(req.body);
        console.log(results);

        res.send(results);
      } catch (error) {
        res.send(error);
      }
    } else {
      res.sendStatus(404);
    }
  },
  searchtitle: async (req, res) => {
    let result;
    try {
      result = await db.Course.findAll({
        where: {
          courseName: req.params.name
        }
      });
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  },
  searchprof: async (req, res) => {
    let result;
    try {
      result = await db.Course.findAll({
        where: {
          prof_id: req.params.prof
        }
      });
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = studentController;
