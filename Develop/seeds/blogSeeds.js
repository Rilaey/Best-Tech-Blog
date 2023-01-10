const { Blogs } = require("../models");

const blogData = [
  {
    blog_title: "The first blog post!",
    blog_message: "Welcome to the Tech Blog! Hope you enjoy!",
    blog_author: 1,
  },
  {
    blog_title: "The first blog post!",
    blog_message:
    "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    blog_author: 2,
  },
  {
    blog_title: "The first blog post!",
    blog_message:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    blog_author: 3,
  },
];

const seedBlogs = () => Blogs.bulkCreate(blogData);

module.exports = seedBlogs;
