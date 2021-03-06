const { check } = require("express-validator");
const { Student, Professor } = require("../models");
StudentvalidationChain = [
  check("firstName")
    .not()
    .isEmpty()
    .withMessage("First name cannot be blank")
    .isLength({ min: 2 })
    .withMessage("First name must be atleast two Charaters long"),
  check("lastName")
    .not()
    .isEmpty()
    .withMessage("Last name cannot be blank")
    .isLength({ min: 2 })
    .withMessage("Last name must be atleast two Charaters long"),
  check("email")
    .not()
    .isEmpty()
    .withMessage("email cannot be empty")
    .isEmail()
    .withMessage("Email format is incorrect"),

  check("phoneNumber")
    .not()
    .isEmpty()
    .withMessage("***phone number cannot be blank")
    .isInt()
    .withMessage("***phone number must be integers between 0-9"),
  check("password")
    .not()
    .isEmpty()
    .withMessage("password cannot be blank")
    .isLength({ min: 6 })
    .withMessage("Password must have atleast 6 characters"),
  check("confirmPassword")
    .not()
    .isEmpty()
    .withMessage("Confirm Password cannot be blank")
    .isLength({ min: 6 })
    .withMessage("Confirm Password must have atleast 6 characters"),

  check("campus")
    .not()
    .isEmpty()
    .withMessage("Campus cannot be blank please select a location")
];

professorValidationChain = [
  check("firstName")
    .not()
    .isEmpty()
    .withMessage("First name cannot be blank")
    .isLength({ min: 2 })
    .withMessage("First name must be atleast two Charaters long"),

  check("lastName")
    .not()
    .isEmpty()
    .withMessage("First name cannot be blank")
    .isLength({ min: 2 })
    .withMessage("First name must be atleast two Charaters long"),

  check("phoneNumber")
    .not()
    .isEmpty()
    .withMessage("phone number cannot be blank")
    .isInt()
    .withMessage("phone number must be integers between 0-9"),

  check("password")
    .not()
    .isEmpty()
    .withMessage("Password cannot be blank")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast six Charaters long"),

  check("confirmpassword")
    .not()
    .isEmpty()
    .withMessage("Password cannot be blank")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast six Charaters long"),

  check("email")
    .not()
    .isEmpty()
    .withMessage("email cannot be empty")
    .isEmail()
    .withMessage("Email format is incorrect"),

  check("campus")
    .not()
    .isEmpty()
    .withMessage("Campus cannot be blank please select a location")
];

CourseValidationChain = [
  check("courseName")
    .not()
    .isEmpty()
    .withMessage("Course Title cannot be blank"),

  // chain('startdate')
  // chain('enddate')

  check("availableseats")
    .not()
    .isEmpty()
    .withMessage("Number of sits is required")
    .isNumeric()
    .withMessage(" Please Enter available sits"),
  check("level")
    .isEmpty()
    .withMessage("Course level cannot be blank"),
  check("prereq")
    .isEmpty()
    .withMessage("Course Pre requsites cannot be blank")
  // chain('prof_id')
];

// SignInValidation

module.exports = { StudentvalidationChain, professorValidationChain };
