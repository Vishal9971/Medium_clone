const express = require('express');
const Router = express.Router();

Router.get('/register', (req, res) => {
  res.render('user/signup');
});

Router.get('/login', (req, res) => {
  res.render('user/login');
});

module.exports = Router;
