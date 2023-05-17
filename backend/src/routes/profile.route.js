const Router = require("express");
const User = require("../models/User");

const router = new Router();

router.post("/show", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json({
      userData: {
        user,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

router.post("/edit-profile", async (req, res) => {
  try {
    const { userData } = req.body;
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const updatedUser = await User.findByIdAndUpdate(user.id, userData, {
      new: true,
    });
    return res.json(updatedUser);
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

module.exports = router;
