const mongoose = require('mongoose');
const {Schema} = mongoose;
const schemaBlog = new  Schema({
  authorName: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  des: {
    type: String,
    required: false,
    trim: true,
  },
  img: {
    type: String,
    required: false,
    trim: true,
  },
});

const Blog = mongoose.model('Blog',schemaBlog);


module.exports = Blog;
