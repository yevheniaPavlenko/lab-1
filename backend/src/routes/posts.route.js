const Router = require("express");
const Post = require("../models/Posts");
const User = require("../models/User");

const router = new Router();

router.post("/add-post", async (req, res) => {
  try {
    const { title, description, body } = req.body;
    const posts = new Post({ title, description, body });
    posts.save();
    return res.json([posts]);
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error", e });
  }
});

router.get("/fetch-all-posts", async (req, res) => {
  try {
    const posts = await Post.find();
    return res.json({
      posts,
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error", e });
  }
});

router.get("/fetch-post", async (req, res) => {
  try {
    const params = req.query.params;
    const post = await Post.findById(params);

    return res.json({
      post,
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error", e });
  }
});

router.post("/add-comment", async (req, res) => {
  try {
    const { comment, postId, userId } = req.body;
    const post = await Post.findById(postId);
    const user = await User.findById(userId);
    post.comments.push({ comment, author: user.username });
    post.save();
    return res.json(post);
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error", e });
  }
});

module.exports = router;
