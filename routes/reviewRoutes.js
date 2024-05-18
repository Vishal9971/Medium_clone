const express = require('express');
const Review = require('../models/Reviews');
const Blog = require('../models/Blogs');
const { reviewValidate } = require('../middleware');
const Router = express.Router();

Router.post('/blogs/:productId/review',reviewValidate, async (req, res) => {
  try {
    let { rating, comment } = req.body;
    let { productId } = req.params;
    console.log(productId, rating, comment);
    let blog = await Blog.findById(productId);
    let newReview = new Review({ rating, comment });
    blog.reviews.push(newReview);
    await newReview.save();
    await blog.save();
    res.redirect(`/product/${productId}`);
  }
  catch (e) {
    res.status(500).send('/error',{ err: e.message });
  }
});

module.exports = Router;
