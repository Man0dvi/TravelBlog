require('dotenv').config( );
const express = require('express');
const app = express();
const port = process.env.PORT || 7777;
const bodyParser = require('body-parser')
const cors = require( 'cors' ) ;
const profileRoutes = require( './api/routes/profile' ) ;

// database connection
require( './api/config/database' );

// allowing cross origin request sources
app.use(cors( )) ;
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));s

// Frontend routes
// app.use("ui");

// Backend routes
app.use(express.static(__dirname + '/views'));
app.use('/api/profiles', profileRoutes) ;
app.set('view engine', 'ejs');
app.get('/ui/profiles', function(req, res) {
    res.render('profile/create');
    // C:/api/views/.ejs
  });
// server running status

app.listen(port, ( ) => {console.log(`The app listening at http://localhost : ${port}`)});
