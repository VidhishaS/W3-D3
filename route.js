const StudentC = require("../Controllers/studentC");
const express= require("express");
const router = express();
router.post("/register", StudentC.createStudent);
module.exports = router;

// const courseC = require("../Controllers/courseC");
// const express= require("express");
// router.post("/register", courseC.createCourse);

