const express = require("express");
const { getOverview, getTourView } = require("../controllers/viewController");

const router = express.Router();

router.get("/", getOverview);
router.get("/tour/:slug", getTourView);

module.exports = router;
