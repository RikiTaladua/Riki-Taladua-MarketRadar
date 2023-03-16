
/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const stocksCtrl = require('./controllers/stocks')

/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');


/* Create the Express app
--------------------------------------------------------------- */
const app = express();


/* Configure the app to refresh the browser when nodemon restarts
--------------------------------------------------------------- */
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    // wait for nodemon to fully restart before refreshing the page
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});


/* Configure the app (app.set)
--------------------------------------------------------------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const stockCtrl = require('./controllers/stocks')
const reviewsCtrl = require('./controllers/reviews')

/* Middleware (app.use)
--------------------------------------------------------------- */
app.use(express.static('public'))
app.use(connectLiveReload());
const methodOverride = require('method-override');
// Allows us to interpret POST requests from the browser as another request type: DELETE, PUT, etc.
app.use(methodOverride('_method'));


/* Mount routes
--------------------------------------------------------------- */
app.get('/', function (req, res) {
    db.Stock.find({isFeatured: true})
    .then(stocks => {
        res.render('home', {
            stocks: stocks
        })
    })
})


// When a GET request is sent to `/seed`, the stocks collection is seeded
app.get('/seed', function (req, res) {
    // Remove any existing stock
    db.Stock.deleteMany({})
        .then(removedStock => {
            console.log(`Removed ${removedStock.deletedCount} tweets`)
            // Seed the stocks collection with the seed data
            db.Stock.insertMany(db.seedStock)
                .then(addedStock => {
                    console.log(`Added ${addedStock.length} stocks on watch list`)
                    res.json(addedStock)
                })
        })
});


// This tells our app to look at the `controllers/pets.js` file 
// to handle all routes that begin with `localhost:3000/pets`
app.use('/stocks', stocksCtrl)






/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});


// Body parser: used for POST/PUT/PATCH routes: 
// this will take incoming strings from the body that are URL encoded and parse them 
// into an object that can be accessed in the request parameter as a property called body (req.body).
app.use(express.urlencoded({ extended: true }));



app.get('/about', function (req, res) {
    res.send('You\'ve hit the about route')
});


// The "catch-all" route: Runs for any other URL that doesn't match the above routes
app.get('*', function (req, res) {
    res.send('404 Error: Page Not Found')
});

// This tells our app to look at the `controllers/applications.js` file 
// to handle all routes that begin with `localhost:3000/applications`
app.use('/applications', reviewsCtrl)
