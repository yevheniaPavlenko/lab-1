const Router = require("express");
const User = require("../models/User");

const router = new Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPassValid = password === user.password;
    if (!isPassValid) {
      return res.status(400).json({ message: "Invalid password" });
    }
    return res.json({
      user: {
        id: user.id,
        email: user.email,
        password: user.password,
        username: user.username,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

module.exports = router;
