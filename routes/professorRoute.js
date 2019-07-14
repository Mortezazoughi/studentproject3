const db = require("../models");
const express = require("express");
const router = express.Router();

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
router.put("/updatecourse/:name", async (req, res) => {
  let results;
  try {
    results = await db.Course.update(req.body, {
      where: {
        courseName: req.params.name
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

module.exports = router;
