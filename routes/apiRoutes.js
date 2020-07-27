"use strict";
console.log('apiRoutes.js');
const router = require("express").Router(),
  coursesController = require("../controllers/coursesController"),
  usersController = require("../controllers/usersController");

console.log('apiRoutes.js 2');
router.use(usersController.verifyToken);
//router.post("/login", usersController.apiAuthenticate);
//router.use(usersController.verifyJWT);
router.get("/courses/:id/join", coursesController.join, coursesController.respondJSON);
console.log('apiRoutes.js 3');
router.get(
  "/courses",
  coursesController.index,
  coursesController.filterUserCourses,
  coursesController.respondJSON
);
console.log('apiRoutes.js 4');
router.use(coursesController.errorJSON);

module.exports = router;
