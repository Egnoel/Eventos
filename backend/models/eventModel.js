const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    title: { type: "String", required: true },
    organizador: {
      type: "String",
      required: true,
      default: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    type: { type: "String", required: true },
    eventDate: { type: "Date", required: true },
    description: { type: "String", required: true },
    price: { type: "String", required: true, default: "0.00" },
    location: { type: "String", required: true },
    eventpic: {
      type: "String",
      required: true,
      default:
        "https://fmp.edu.br/wp-content/uploads/2022/02/fmp-show-cancelado-3.jpg",
    },
  },
  { timestaps: true }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
