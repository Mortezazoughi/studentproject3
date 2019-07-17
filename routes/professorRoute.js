const db = require("../models");
const professorController = require("../controller/professorController");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const saltRounds = 10;

//check if the user exists in the database before performing said actions
const { profauthorizationMiddleware } = require("./authentication");

//creates the prof.
router.post("/profsignup", professorController.profsignup);

// Sign in
// ****  SIGNIN is handled by authorization middleware

// create a new course Should not create duplicates ...
router.post(
  "/createcourse",
  profauthorizationMiddleware,
  professorController.createcourse
);
// update an existing course
router.put(
  "/updatecourse/:id",
  profauthorizationMiddleware,
  professorController.updatecourse
);

// delete an existing course
router.delete("/deleteroute/:id", professorController.deleteroute);
//Search for all courses taught by prof :
router.get(
  "/getmycourse/:id",
  profauthorizationMiddleware,
  professorController.getmycourse
);
// Edit their own profile
router.put("/updateprofprofile", professorController.updateprofprofile);
// ******View all student records **** WIP select all students in a course by a prof
router.get(
  "/allstudentsregistered/:id/:sid",
  profauthorizationMiddleware,
  professorController.allstudentsregistered
);
// Add grades to students

// ***** THREE LEVELS DEEP******
router.get("/getmyblah", (req, res) => {
  db.Professor.findAll({
    include: [{ model: db.Course, include: [{ model: db.StudentCourse }] }]
  })
    .then(ProfCourse => res.send(ProfCourse))
    .catch(error => console.log(error));
});

module.exports = router;
