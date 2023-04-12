require('dotenv').config( );
const express = require('express');
const app = express();
const port = process.env.PORT || 7777;
const bodyParser = require('body-parser')
const cors = require('cors') ;
const blogsRoutes = require( './api/routes/blogs' ) ;

// database connection
require( './api/config/database' );

// allowing cross origin request sources
app.use(cors( )) ;
app.use(bodyParser.json());

// Frontend routes
// app.use("ui");

// Backend routes
app.use(express.static(__dirname + '/views'));
app.use('/api/blogs', blogsRoutes) ;
app.set('view engine', 'ejs');
app.get('/ui', function(req, res) {
  res.render('index');
  // C:/api/views/.ejs
});
app.get('/ui/home', function(req, res) {
  res.render('index');
  // C:/api/views/.ejs
});
app.get('/ui/createBlog', function(req, res) {
  res.render('createBlog');
  // C:/api/views/.ejs
});
app.get('/ui/myBlogs', function(req, res) {
  res.render('myBlogs');
  // C:/api/views/.ejs
});
// server running status

app.listen(port, ( ) => {console.log(`The app listening at http://localhost : ${port}`)});
