const joi = require('joi');

const productSchema = joi.object({
  authorName: joi.string().required(),
  title: joi.string().required(),
  des: joi.string(),
  img:joi.string().required(),
});

const reviewSchema = joi.object({
  rating : joi.number(),
  comment:joi.string().required(),
});


module.exports = {productSchema,reviewSchema};


