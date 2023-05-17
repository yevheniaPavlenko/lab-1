const Router = require("express");
const User = require("../models/User");

const router = new Router();

router.post("/change-password", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.password = password;
    user.save();
    return res.json({ message: "Successfully changed" });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error", e });
  }
});

module.exports = router;
