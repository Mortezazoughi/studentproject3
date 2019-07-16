const db = require("../models");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const saltRounds = 10;

//check if the user exists in the database before performing said actions
const { authorizationMiddleware } = require("./authentication");

//creates the prof.
router.post("/profsignup", async (req, res) => {
  req;
  let {
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    confirmpassword
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
          confirmpassword: hashedconfirmpassword
        });
        res.send(results);
      } catch (error) {
        console.log("Somthing is wrong");

        res.sendStatus(403);
      }
    } else {
      console.log("person does not exist");

      res.sendStatus(403);
    }
  } else {
    console.log("passwords dont match");
    res.sendStatus(403);
  }
});

// Things a professor can do(ROUTES)
// Sign in
// create a new course Should not create duplicates ...
router.post("/createcourse", authorizationMiddleware, async (req, res) => {
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
      res.send(results);
    } catch (error) {
      res.sendStatus(404).redirect("/newprof");
    }
  } else {
    //if course exists
    console.log("*****ALREADY EXISTS");
    res.sendStatus(403);
  }
});
// update an existing course
// *** FIGURE OUT HOW TO PREVENT DUPLICATES****
router.put("/updatecourse/:id", authorizationMiddleware, async (req, res) => {
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
});

// delete an existing course
//Search for all courses taught by prof :
router.get("/getmycourse/:id", authorizationMiddleware, (req, res) => {
  db.Professor.findAll({
    include: [{ model: db.Course, where: { id: req.params.id } }]
  })
    .then(ProfCourse => res.send(ProfCourse))
    .catch(error => console.log(error));
});
// Edit their own profile
router.put("/updateprofprofile", async (req, res) => {
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
});
// ******View all student records **** WIP select all students in a course by a prof
router.get(
  "/allstudentsregistered/:id/:sid",
  authorizationMiddleware,
  async (req, res, next) => {
    let results;
    try {
      results = await db.StudentCourse.findAll({
        where: { course_id: req.params.id, student_id: req.params.sid }
      });
      res.send(results);
    } catch (error) {
      res.send(error);
    }
  }
);

// include: [
//   {
//     model: db.Course,
//     // where: { id: req.params.cid },
//     include: [{ model: db.StudentCourse
//       ,where: { id: req.params.sid } }]
//   }
// ]

// Add grades to students

// ***** FIND OR CREATE****** Convert to async await
router.post("/createcoursez", authorizationMiddleware, (req, res) => {
  db.Course.count({
    where: { courseName: req.body.courseName }
  }).then(count => {
    if (count) {
      console.log("already exists");
      return res.sendStatus(403);
    } else {
      console.log("in else");
      db.Course.create(req.body)
        .then(data => {
          res.send(data);
        })
        .catch(error => res.sendStatus(500));
    }
  });
});
// ***** THREE LEVELS DEEP******
router.get("/getmyblah", (req, res) => {
  db.Professor.findAll({
    include: [{ model: db.Course, include: [{ model: db.StudentCourse }] }]
  })
    .then(ProfCourse => res.send(ProfCourse))
    .catch(error => console.log(error));
});

module.exports = router;
