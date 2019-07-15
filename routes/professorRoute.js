const db = require("../models");
const express = require("express");
const router = express.Router();
const authorizationMiddleware = require("./authentication");

//creates the prof. we dont need this route
router.post("/newprof", async (req, res) => {
  let results;
  try {
    results = await db.Professor.create(req.body);
    res.send(results);
  } catch (error) {
    res.sendStatus(404).redirect("/newprof");
  }
});

// Things a professor can do(ROUTES)
// Sign in
// create a new course ...
// ****** Need to figure out how to check if it already exists*****
router.post("/createcourse", async (req, res) => {
  const { courseName } = req.body;

  //check if course already exists
  let results;
  try {
    results = await db.Course.create(req.body);
    res.send(results);
  } catch (error) {
    res.sendStatus(404).redirect("/newprof");
  }
});
// update an existing course
// *** FIGURE OUT HOW TO PREVENT DUPLICATES****
router.put("/updatecourse/:id", async (req, res) => {
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
});

// delete an existing course

// Edit and update a course
// Edit their own profile
// View all student records
// Add grades to students

// ***** FIND OR CREATE****** Convert to async await
router.post("/createcoursez", (req, res) => {
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

// ****PLAYING WITH NESTED QUERIES WORKING TWO TABLES *****
router.get("/getmycourse", (req, res) => {
  //   db.Professor.findAll({
  //     include: [{ models: Course, where: { courseName: "courseone" } }]
  //   })
  //     .then(ProfCourse => console.log(ProfCourse))
  //     .catch(error => console.log(error));
  db.Professor.findAll({
    include: [{ model: db.Course, where: { id: 1 } }]
  })
    .then(ProfCourse => res.send(ProfCourse))
    .catch(error => console.log(error));
});

// ***** THREE LEVELS DEEP******
router.get("/getmyblah", (req, res) => {
  //   db.Professor.findAll({
  //     include: [{ models: Course, where: { courseName: "courseone" } }]
  //   })
  //     .then(ProfCourse => console.log(ProfCourse))
  //     .catch(error => console.log(error));
  db.Professor.findAll({
    include: [{ model: db.Course, include: [{ model: db.StudentCourse }] }]
  })
    .then(ProfCourse => res.send(ProfCourse))
    .catch(error => console.log(error));
});

module.exports = router;
