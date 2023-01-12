const router = require("express").Router();
const { User, Blogs } = require("../models");
const userAuth = require('../utils/auth')

// home page with existing blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blogs.findAll({
      include: [{ model: User }],
    });
    const allBlogs = blogs.map((x) => x.get({ plain: true }));
    //console.log(allBlogs);
    res.render("home", {
      allBlogs,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// login page
router.get("/login", (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// signup page
router.get("/signup", (req, res) => {
  try {
    res.render("signup")
  } catch(err) {
    console.log(err);
    res.status(500).json(err)
  }
})

// dashboard
router.get("/dashboard", (req, res) => {
  try {
    res.render("dashboard")
  } catch(err) {
    res.status(500).json(err)
  }
})

// if user is logged in, redirect to dashboard
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
