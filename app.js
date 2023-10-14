const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const blogsRouter = require('./routes/blogsRoutes');

mongoose.set('strictQuery', true);
// const mongoose = require('mongoose');
mongoose
  .connect('mongodb://127.0.0.1:27017/blogDB')
  .then(() => {
    console.log('DB ban gya');
  })
  .catch((err) => {
    console.log(`DB nhi ban gya`, err);
  });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.get('/', (req, res) => {
  res.send(`<h1>chl gya bhai /blogs krke dekhle. </h1>`);
});

// seedDB();

app.use(blogsRouter);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server connected at port ${PORT}`);
});
