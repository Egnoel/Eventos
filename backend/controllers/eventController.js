const asyncHandler = require("express-async-handler");
const Event = require("../models/eventModel");

const allEvents = asyncHandler(async (req, res) => {
  try {
    const events = await Event.find().populate("creator", "name");
    res.status(200);
    res.json(events);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const createEvent = asyncHandler(async (req, res) => {
  const { title, type, description, price, location } = req.body;
  if (!req.user) return res.status(400).send("user not found");
  if (!title || !type || !description || !location)
    return res.status(400).send("please fill all the fields");
  const user = req.user;
  try {
    var event = await Event.create({
      title,
      creator: user,
      type,
      description,
      price,
      location,
    });
    event = await event.populate("creator", "-password").execPopulate();
    res.status(200).send(event);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const oneEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id).populate("creator", "name");
  if (!event) return res.status(400).send("no event found");
  res.status(200).send(event);
});

const editEvent = asyncHandler(async (req, res) => {
  var { title, type, description, price, location, id } = req.body;
  const event = await Event.findById(id);
  if (!event) return res.status(400).send("no event found");
  if (!title) title = event.title;
  if (!type) type = event.type;
  if (!description) description = event.description;
  if (!price) price = event.price;
  if (!location) location = event.location;
  try {
    const eventUpdate = await Event.findByIdAndUpdate(
      id,
      {
        title,
        type,
        description,
        price,
        location,
      },
      {
        new: true,
      }
    ).populate("creator", "name");
    res.status(200).send(eventUpdate);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const filterEvents = asyncHandler(async (req, res) => {});

const deleteEvent = asyncHandler(async (req, res) => {});

module.exports = {
  allEvents,
  createEvent,
  oneEvent,
  editEvent,
  filterEvents,
  deleteEvent,
};
