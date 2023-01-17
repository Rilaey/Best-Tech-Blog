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
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

// dashboard
router.get('/dashboard', userAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blogs }],
    });
    const users = userData.get({ plain: true });
    console.log(users)

    res.render('dashboard', {
      ...users,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

module.exports = router;
