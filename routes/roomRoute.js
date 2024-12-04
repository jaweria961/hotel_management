const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const Room = require("../models/room");

router.get("/getallrooms", async (req, res) => {
  try {
    const rooms = await Room.find({});

    res.send(rooms);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.get("/getallrooms:id", async (req, res) => {
  try {
    const roomId = req.params.id;
    const room = await Room.findById(roomId);
    console.log("🚀 ~ router.get ~ room:", room);

    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.send(room);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
