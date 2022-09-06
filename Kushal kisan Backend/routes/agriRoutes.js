const express = require("express");
const { getAllTour, create_new_tour, UpdateTour, DeleteTour, getTourDetails } = require("../controllers/agriController");
const { check_ROLES } = require("../middleware/check_role");
const { isauth } = require("../middleware/is_auth");

const router = express.Router();

router.route("/agriTourism").get(getAllTour);
//console.log("process start")
router.route("/agriTourism/new_tour").post(isauth, check_ROLES("farmer", "admin"), create_new_tour);
router.route("/agriTourism/:id").put(isauth, check_ROLES("admin", "farmer"), UpdateTour).delete(isauth, check_ROLES("admin", "farmer"), DeleteTour).get(getTourDetails);

module.exports = router;