const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");

const studentController = require("../controller/studentController");
const expressValidator = require("express-validator");
const { validationResult } = require("express-validator");
const { StudentvalidationChain } = require("../routes/validationChain");
const { studentauthMiddleware } = require("./authentication");
const verifyToken = require("../routes/jwtAuth");

//Handles all the errors that came back from validation chain and displays them on the screen
//wrapped the errors in a middleware function
const errorMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  } else {
    next();
  }
};

// things that a student can do
// 1. Signup
router.post(
  "/studentSignup",
  StudentvalidationChain,
  errorMiddleware,
  studentController.studentSignup
);

// student controller holds the actual routes as methods

// 2. SignIn
router.post(
  "/signIn",
  // StudentvalidationChain,
  // errorMiddleware,
  studentauthMiddleware,
  studentController.signIn
);

// 3. Register for a course **** WIP**** check with brains
router.post(
  "/registerforclass/:c_id/:s_id",
  // studentauthMiddleware,
  // verifyToken,
  // StudentvalidationChain,
  // errorMiddleware,
  studentController.registerforclass
);
// 4. Search for all courses
router.get("/searchallcourses", studentController.searchallcourses);

// 5. Edit their profile
// working but needs improvement middleware is breaking
router.put(
  "/updatestudent",

  verifyToken,
  // StudentvalidationChain,
  // errorMiddleware,
  studentController.updatestudent
);
// search for courses by name
router.get("/searchtitle/:name", studentController.searchtitle);

//search for courses by professor
router.get("/searchprof/:id", studentController.searchprof);

router.get(
  "/studentinfo/:id",

  // verifyToken,
  studentController.studentinfo
);
module.exports = router;
