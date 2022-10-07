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
  const { title, type, description, price, location, category } = req.body;
  if (!req.user) return res.status(400).send("user not found");
  if (!title || !type || !description || !location || !category)
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
      category,
    });
    event = await event.populate("creator", "-password").execPopulate();
    res.status(200).send(event);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const oneEvent = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const event = await Event.findById(id).populate("creator", "name");
    if (!event) return res.status(400).send("no event found");
    res.status(200).send(event);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const editEvent = asyncHandler(async (req, res) => {
  const id = req.params.id;
  if (!req.body)
    return res.status(400).send("Data to update can not be empty!");
  const event = await Event.findById(id);
  if (!event) return res.status(400).send("no event found");
  try {
    const eventUpdate = await Event.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
    }).populate("creator", "name");
    res.status(200).send(eventUpdate);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const filterEvents = asyncHandler(async (req, res) => {
  const category = req.body.category;
  try {
    const event = await Event.find({ category: category }).populate(
      "creator",
      "name"
    );
    if (!event) return res.status(400).send("no event found");
    res.status(200).send(event);
  } catch (error) {
    res.status(400).send("filter error");
    throw new Error(error.message);
  }
});

const deleteEvent = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const event = await Event.findById(id);
  if (!event) return res.status(400).send("no event found");
  try {
    const events = await Event.findByIdAndRemove(id);
    res.status(200).send("Deleted successfuly");
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

module.exports = {
  allEvents,
  createEvent,
  oneEvent,
  editEvent,
  filterEvents,
  deleteEvent,
};
