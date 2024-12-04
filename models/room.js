const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrls: [],
    rentPerDay: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    maxCount: {
      type: Number,
      required: true,
    },

    phoneNumber: {
      type: Number,
      required: true,
    },
    currentBooking: [],
    descriptions: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const roomModel = mongoose.model("rooms", roomSchema);

module.exports = roomModel;
