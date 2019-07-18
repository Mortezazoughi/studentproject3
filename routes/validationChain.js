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
    .withMessage("First name cannot be blank")
    .isLength({ min: 2 })
    .withMessage("First name must be atleast two Charaters long"),
  check("email")
    .not()
    .isEmpty()
    .withMessage("email cannot be empty")
    .isEmail()
    .withMessage("Email format is incorrect"),

  check("phoneNumber")
    .not()
    .isEmpty()
    .withMessage("phone number cannot be blank")
    .isInt()
    .withMessage("phone number must be integers between 0-9"),

  check("campus")
    .not()
    .isEmpty()
    .withMessage("Campus cannot be blank please select a location")
];

module.exports = { StudentvalidationChain };
