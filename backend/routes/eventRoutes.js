const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  allEvents,
  createEvent,
  oneEvent,
  editEvent,
  filterEvents,
  deleteEvent,
} = require("../controllers/eventController");

const router = express.Router();

router.route("/").get(allEvents);
router.route("/:eventId").get(oneEvent);
router.route("/create").post(protect, createEvent);
router.route("/edit").put(protect, editEvent);
router.route("/filter").get(filterEvents);
router.route("/:eventId").delete(deleteEvent);

module.exports = router;
