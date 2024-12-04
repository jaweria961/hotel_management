const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.post("/register", async (req, res) => {
  const newUser = new User(req.body);
  try {
    const _user = await newUser.save();
    console.log("users are", _user);
    res.send("Registered Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email, password: password });
    console.log("🚀 ~ router.post ~ user:", user);
    if (user) {
      const temp = {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        _id: user._id,
      };
      res.send(temp);

      // res.status(200).json({ redirectTo: "/home" });
    } else {
      return res.status(400).json({ message: "login Failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
