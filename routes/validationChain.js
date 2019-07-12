const { check } = require("express-validator");
validationChain = [
  check("firstName")
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

  check("phone")
    .not()
    .isEmpty()
    .withMessage("phone number cannot be blank")
    .isInt()
    .withMessage("phone number must be integers between 0-9")
  //  check("comparepassword")
];

module.exports = validationChain;
