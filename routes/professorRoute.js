const db = require("../models");
const professorController = require("../controller/professorController");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const { validationResult } = require("express-validator");
const { professorValidationChain } = require("../routes/validationChain");

//handle validation chain errors
errorsMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  } else [next()];
};

//check if the user exists in the database before performing said actions
const { profauthorizationMiddleware } = require("./authentication");

//creates the prof.
router.post(
  "/profsignup",
  // professorValidationChain,
  // errorsMiddleware,
  professorController.profsignup
);

// Sign in
// ****  SIGNIN is handled by authorization middleware

// create a new course Should not create duplicates ...
router.post(
  "/createcourse",
  // professorValidationChain,
  // errorsMiddleware,
  // profauthorizationMiddleware,
  professorController.createcourse
);
// update an existing course
router.put(
  "/updatecourse/:name",
  // errorsMiddleware,
  // professorValidationChain,
  // profauthorizationMiddleware,
  professorController.updatecourse
);

// delete an existing course
router.delete("/deleteroute/:name", professorController.deleteroute);
//Search for all courses taught by prof :
router.get(
  "/getmycourse/:id",
  // profauthorizationMiddleware,
  professorController.getmycourse
);
// Edit their own profile
router.put(
  "/updateprofprofile",
  //  professorValidationChain,
  //   errorsMiddleware,
  professorController.updateprofprofile
);
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
