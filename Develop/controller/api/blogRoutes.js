// import express router
const router = require('express').Router();
// import blogs model
const { Blogs } = require('../../models');
// import auth function
const userAuth = require('../../utils/auth');

router.post('/', userAuth, async (req, res) => {
    try {
      const newBlog = await Blogs.create({
        blog_title: req.body.blogTitle,
        blog_message: req.body.blogMessage,
        blog_author: req.session.user_id,
      });
  
      res.status(200).json(newBlog);
    } catch (err) {
      res.status(400).json(err);
      console.log(err)
    }
  });

  module.exports = router;