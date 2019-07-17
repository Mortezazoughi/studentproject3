const express = require("express");
const router = express.Router();
const db = require("../models");
const { validationResult } = require("express-validator");
const studentController = require("../controller/studentController");
const expressValidator = require("express-validator");
const validationChain = require("../routes/validationChain");
const { studentauthMiddleware } = require("./authentication");

//Handles all the errors that came back from valiaton chain and displays them on the screen
const errrorMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errormessages = errors.array().map(err => err.msg);
    res.status(400).json({ errors: errormessages });
  } else {
    next();
  }
};

// things that a student can do
// 1. Signup
router.post("/studentSignup", studentController.studentSignup);

// student controller holds the actual routes as methods

// 2. SignIn
// 3. Register for a course **** WIP**** check with brains
router.post(
  "/registerforclass/:name",
  studentauthMiddleware,
  studentController.registerforclass
);
// 4. Search for all courses
router.get("/searchallcourses", studentController.searchallcourses);

// 5. Edit their profile
// working but needs improvement middleware is breaking
router.put(
  "/updatestudent",
  studentauthMiddleware,
  studentController.updatestudent
);
// search for courses by name
router.get("/searchtitle/:name", studentController.searchtitle);

//search for courses by professor
router.get("/searchprof/:id", studentController.searchprof);

module.exports = router;
