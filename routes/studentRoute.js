const express = require("express");
const router = express.Router();
const db = require("../models");
const { validationResult } = require("express-validator");
const studentController = require("../controller/sudentController");
const expressValidator = require("express-validator");
const validationChain = require("../routes/validationChain");

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

// student controller holds the actual routes as methods
router.post(
  "/signup",
  validationChain,
  errrorMiddleware,
  studentController.signup
);

// 2. SignIn
// 3. Register for a course
// 4. Search for courses
// 5. Edit their profile

module.exports = router;
