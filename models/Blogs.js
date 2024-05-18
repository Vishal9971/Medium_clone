const mongoose = require('mongoose');
let schemaBlog = new  mongoose.Schema({
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
  reviews:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Review",
  }],
});

let Blog = mongoose.model('Blog',schemaBlog);


module.exports = Blog;
