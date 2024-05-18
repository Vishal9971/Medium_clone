if (process.env.MODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const methodOverride = require('method-override');
var session = require('express-session');
const flash = require('connect-flash');
const blogsRouter = require('./routes/blogsRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const authRoutes = require('./routes/authRoutes');
const Blog = require('./models/Blogs');
const dbURL =
  process.env.dbURL ||
  'mongodb+srv://sharmavis77:dX6OrQz1W4Q6u4Sc@blog.ypuyfwb.mongodb.net/?retryWrites=true&w=majority&appName=blog';

mongoose.set('strictQuery', true);
// const mongoose = require('mongoose');
mongoose
  .connect(dbURL)
  .then(() => {
    console.log('DB ban gya');
  })
  .catch((err) => {
    console.log(`DB nhi ban gya`, err);
  });

let sessionConfig = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true },
};

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  try {
    let allBlogs = await Blog.find({});
    res.render('blogs/index', { allBlogs });
  } catch (e) {
    // res.status(500).render('error', { err: e.message });
    res.send('error occurs');
  }
});
app.use(session(sessionConfig));
app.use(flash());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});
seedDB();

app.use(blogsRouter);

app.use(reviewRoutes);

app.use(authRoutes);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server connected at port ${PORT}`);
});
