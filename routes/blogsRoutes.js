const express = require('express');
const Blog = require('../models/Blogs');
const { productValidate } = require('../middleware');
const Router = express.Router();

//render dummy blogs
Router.get('/blogs', async (req, res) => {
  try {
    let allBlogs = await Blog.find({});
    res.render('blogs/index', { allBlogs });
  } catch (e) {
    res.status(500).render('error', { err: e.message });
  }
});

//form for add new blog
Router.get('/blogs/new', async (req, res) => {
  try {
    res.render('blogs/new');
  } catch (e) {
    res.status(500).render('error', { err: e.message });
  }
});

//adding the new blog
Router.post('/blogs', productValidate, async (req, res) => {
  // try {
    let { authorName, img, des, title } = req.body;
    // console.log(req.body);
    await Blog.create({ authorName,img,des,title });
    req.flash('success', 'Blog added successfully.');
    res.redirect('/blogs');
  // } catch (e) {
    // req.flash('error', 'Blog not added.');
    // console.log(e.message);

    // res.status(500).render('error', { error: e.message });
    // console.log(error);
  // }
});
//showing a particular blog
Router.get('/blogs/:id', async (req, res) => {
  try {
    let { id } = req.params;
    let foundBlog = await Blog.findById(id);
    // console.log(foundBlog);
    res.render('blogs/show', { foundBlog });
  } catch (e) {
    res.status(500).render('error', { err: e.message });
  }
});
//show edit page
Router.get('/blogs/:id/edit', async (req, res) => {
  try {
    let { id } = req.params;
    let foundBlog = await Blog.findById(id).populate('reviews');
    res.render('blogs/edit', { foundBlog });
  } catch (e) {
    res.status(500).render('error', { err: e.message });
  }
});
//editted the blog
Router.patch('/blogs/:id', productValidate, async (req, res) => {
  try {
    let { id } = req.params;
    let { authorName, des, title, img } = req.body;
    await Blog.findByIdAndUpdate(id, { authorName, title, img, des });
    res.redirect('/blogs');
  } catch (e) {
    res.status(500).render('error', { err: e.message });
  }
});
//delete the selected blog
Router.delete('/blogs/:id', async (req, res) => {
  try {
    let { id } = req.params;
    await Blog.findByIdAndDelete(id, {});
    res.redirect('/blogs');
  } catch (e) {
    res.status(500).render('error', { err: e.message });
  }
});

module.exports = Router;
