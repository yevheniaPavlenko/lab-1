const express = require("express");
const mongoose = require("mongoose");

const registrationRouter = require("./src/routes/registration.route");
const authRouter = require("./src/routes/auth.route");
const profileRouter = require("./src/routes/profile.route");
const updateProfileRouter = require("./src/routes/updateProfile.route");
const postsRouter = require("./src/routes/posts.route");
const allPostsRoute = require("./src/routes/posts.route");
const changePasswordRoute = require("./src/routes/change-password.route");
const currentPostRoute = require("./src/routes/posts.route");
const addCommentRoute = require("./src/routes/posts.route");

const corsMiddleware = require("./src/middleware/cors.middleware");

const PORT = 8000;

const app = express();

app.use(express.json());

app.use(corsMiddleware);

app.use("/api/auth", registrationRouter);
app.use("/api/auth", authRouter);
app.use("/api/auth", changePasswordRoute);
app.use("/api/profile", profileRouter);
app.use("/api/profile", updateProfileRouter);
app.use("/api/posts", postsRouter);
app.use("/api/posts", allPostsRoute);
app.use("/api/posts", currentPostRoute);
app.use("/api/posts", addCommentRoute);

const runServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://yevheniialazorenko:yevhenia1032001@blog-cluster.jn39bbq.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => {
      console.log("Server has been started on port", PORT);
    });
  } catch (e) {
    console.log("Error", e);
  }
};

runServer();
