const express = require("express");
const courseHelpers = require('../helpers/course');
const renderCoursePage = courseHelpers.renderCoursePage;
const router = express.Router();

/* ROUTES */

router.get("/:courseId", function(req, res) {
    var context = {};
    renderCoursePage(req.params.courseId, res);
});

module.exports = router;