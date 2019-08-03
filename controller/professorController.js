const bcrypt = require("bcryptjs");
const saltRounds = 10;
const db = require("../models");
const professorValidationChain = require("../routes/validationChain");

const professorController = {
  //new professor signup
  profsignup: async (req, res) => {
    console.log(req.body);
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      confirmpassword,
      campus
    } = req.body;

    // compare input passwords
    if (password != confirmpassword) {
      res.status(403).json({ message: "Passwords dont match" });
      return;
    }

    {
      checkforProf = await db.Professor.findOne({
        where: {
          email: email
        }
      });

      //check if professor already exists in the database
      //If does not exist go ahead and create a new prof
      if (checkforProf) {
        res.status(403).json({ message: "Email already exists" });
        return;
      }
      let results;
      //hash password and confirmpassword before storing to db
      const hashedpassword = bcrypt.hashSync(password, saltRounds);
      const hashedconfirmpassword = bcrypt.hashSync(
        confirmpassword,
        saltRounds
      );
      try {
        results = await db.Professor.create({
          firstName,
          lastName,
          phoneNumber,
          email,
          password: hashedpassword,
          confirmpassword: hashedconfirmpassword,
          campus
        });
        res.send(results);
      } catch (error) {
        res
          .status(500)
          .json({ message: `Something went wrong on our side ${error}` });
      }
    }
  },

  profsignin: async (req, res) => {
    // userid is value coming from WebAuthentication.js
    res.json({userid: userid})
  },
  //Create new course
  createcourse: async (req, res) => {
    // console.log(req.body);
    console.log("******BODY IS***** ", req.body);
    const { courseName } = req.body;
    //check if course already exists
    const coursecheck = await db.Course.findOne({
      where: {
        courseName
      }
    });
    //If course does not exist
    if (coursecheck) {
      //if course exists
      res.status(403).json({ message: "Course already exists." });
    }

    let results;
    try {
      results = await db.Course.create(req.body);
      //******ADD LOGIC TO REDIRECT TO THE PAGE */
      res.status(201).json({ message: "Course created successfully" });
      return;
    } catch (error) {
      res
        .status(500)
        // .json({ message: "Something went wrong with the request", erorr });
        .json({ message: error });
      return;
    }
  },
  // Not getting my couses
  updatecourse: async (req, res) => {
    const { courseName } = req.body;
    //check if course already exists

    const coursecheck = await db.Course.findOne({
      where: {
        courseName: req.params.name
      }
    });
    //If course does not exist
    if (coursecheck) {
      let results;
      try {
        results = await db.Course.update(req.body, {
          where: {
            courseName: req.params.name
          }
        });
        res.status(201).json({ message: "Course succesfully updated" });
      } catch (error) {
        res.status(500).json({ message: "Something went wrong " });
      }
    } else {
      //if course exists
      res.status(403).json({ message: "Course does not exist." });
      return;
    }
  },
  //get all my courses as a prof
  getmycourse: async (req, res) => {
    let results;

    try {
      results = await db.Course.findAll({
        // include: [
        //   { model: db.Course,
        //     where:
        //     { id: req.params.id }
        //   }]

        where: { prof_id: req.params.id }
      });
      res.send(results);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  },
  updateprofprofile: async (req, res) => {
    let results;
    try {
      results = await db.Professor.update(req.body, {
        where: {
          email: req.body.email
        }
      });
      res.send(results);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  },
  allstudentsregistered: async (req, res) => {
    console.log("***** HERE*****");
    console.log(req.body);
    console.log(req.params.id);
    let results;
    try {
      // results = await db.StudentCourse.findAll({
      //   where: { course_id: req.params.id, student_id: req.params.sid }
      // });
      console.log(req.params.id);
      results = await db.Professor.findAll({
        where: {
          id: req.params.id
        },
        include: [
          {
            model: db.Course,
            include: [
              {
                model: db.StudentCourse,
                include: [
                  {
                    model: db.Student
                  }
                ]
              }
            ]
          }
        ]
      });
      res.send(results);
    } catch (error) {
      res.send(error);
    }
  },
  // *** COMEBACK TO THIS***
  deleteroute: async (req, res) => {
    let results;
    try {
      results = await db.Course.destroy({
        where: {
          courseName: req.params.name
        }
      });
      console.log("record deleted");
      res.status(200).json({ message: "course deleted" });
    } catch (error) {
      res.status(500);
    }
  }
};
module.exports = professorController;
