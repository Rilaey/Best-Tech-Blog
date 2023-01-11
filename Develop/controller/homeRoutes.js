const router = require("express").Router();
const { User, Blogs } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogs = await Blogs.findAll({
      include: [{ model: User }],
    });
    const allBlogs = blogs.map((x) => x.get({ plain: true }));
    console.log(allBlogs)
    res.render("home", {
      allBlogs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router