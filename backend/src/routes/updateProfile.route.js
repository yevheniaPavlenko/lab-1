const Router = require("express");
const User = require("../models/User");

const router = new Router();

router.post("/edit", async (req, res) => {
  try {
    const userData = req.body;
    const updatedUser = await User.findByIdAndUpdate(userData.id, userData, {
      new: true,
    });
    return res.json(updatedUser);
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

module.exports = router;
