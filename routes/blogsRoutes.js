const Blog = require('../models/Blogs');
const express = require('express');
const Router = express.Router();

//render dummy blogs
Router.get('/blogs', async (req, res) => {
  let allBlogs = await Blog.find({});
  res.render('blogs/index', { allBlogs });
});

//form for add new blog
Router.get('/blogs/new', async (req, res) => {
  res.render('blogs/new');
});

//adding the new blog
Router.post('/blogs', async (req, res) => {
  let { name, img, des, title } = req.body;
  // console.log(req.body);
  await Blog.create({ authorName: name, img: img, des: des, title: title });
  res.redirect('/blogs');
});
//

module.exports = Router;
