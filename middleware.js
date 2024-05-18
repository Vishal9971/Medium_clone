const { productSchema, reviewSchema } = require('./schema');

const productValidate = (req, res, next) => {
  let { authorName, img, des,title } = req.body;
  const { error } = productSchema.validate({ authorName, img, des,title });
  if (error) {
    return res.render('error',{error});
  }
  next();
};

const reviewValidate = (req, res, next) => {
  let {rating,comment} = req.body;
  const {error} = reviewSchema.validate({rating,comment});
  if(error){
    return res.render('error');
  }
  next();
};
module.exports={productValidate,reviewValidate};
