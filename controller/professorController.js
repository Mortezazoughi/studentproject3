const bcrypt = require("bcryptjs");
const saltRounds = 10;
const db = require("../models");
const validationChain = require("../routes/validationChain");

const professorController = {
  //new professor signup
  profsignup: async (req, res) => {
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
    if (password === confirmpassword) {
      checkforProf = await db.Professor.count({
        where: {
          email: email
        }
      });

      //check if professor already exists in the database
      //If does not exist go ahead and create a new prof
      if (checkforProf === 0) {
        let results;
        //hash password and confirmpassword before storing to db
        const hashedpassword = bcrypt.hashSync(password, saltRounds);
        const hashedconfirmpassword = bcrypt.hashSync(
          confirmpassword,
          saltRounds
        );
        try {
          results = await db.Professor.create({
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            password: hashedpassword,
            confirmpassword: hashedconfirmpassword,
            campus: campus
          });
          res.send(results);
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
 
  //Create new course
  createcourse:  async (req, res) => {
    const { courseName } = req.body;
    //check if course already exists
    const coursecheck = await db.Course.count({
      where: {
        courseName
      }
    });
    //If course does not exist
    if (coursecheck === 0) {
      let results;
      try {
        results = await db.Course.create(req.body);
        console.log("***INSIDE CREATE COURSE", results);
        res.sendStatus(200);
        return;
      } catch (error) {
        res.sendStatus(500);
        return;
      }
    } else {
      //if course exists
      res.sendStatus(403);
    }
  },
  updatecourse: async (req, res) => {
    const { courseName } = req.body;
    //check if course already exists
    const coursecheck = await db.Course.count({
      where: {
        courseName
      }
    });
    //If course does not exist
    if (coursecheck === 0) {
      let results;
      try {
        results = await db.Course.update(req.body, {
          where: {
            id: req.params.id
          }
        });
        res.send(results);
      } catch (error) {
        res.sendStatus(404).redirect("/newprof");
      }
    } else {
      //if course exists
      console.log("*****DOES NOT");
      res.sendStatus(403);
    }
  },
  getmycourse: (req, res) => {
    db.Professor.findAll({
      include: [{ model: db.Course, where: { id: req.params.id } }]
    })
      .then(ProfCourse => res.send(ProfCourse))
      .catch(error => console.log(error));
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
      res.redirect("/");
    }
  },
  allstudentsregistered: async (req, res, next) => {
    let results;
    try {
      results = await db.StudentCourse.findAll({
        where: { course_id: req.params.id, student_id: req.params.sid }
      });
      res.send(results);
    } catch (error) {
      res.send(error);
    }
  },
  deleteroute: async (req, res) => {
    let results;
    try {
      results = db.Course.destroy({
        where: {
          id: req.params.id
        }
      });
      console.log("record deleted");
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }
};
module.exports = professorController;
