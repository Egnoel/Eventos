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
router.route("/:id").get(oneEvent);
router.route("/create").post(protect, createEvent);
router.route("/:id").put(protect, editEvent);
router.route("/filter").get(filterEvents);
router.route("/:id").delete(deleteEvent);

module.exports = router;
