/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/stocks`
---------------------------------------------------------------------------------------
*/


/* Require modules
--------------------------------------------------------------- */
const express = require('express')
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')


/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all stocks

router.get('/', function (req, res) {
    db.Stock.find({})
    .then(stocks => {
        res.render('stock-index', {
            stocks: stocks
        })
    })
})


// Show Route (GET/Read): Will display an individual stock document
// using the URL parameter (which is the document _id)
router.get('/:id', function (req, res) {
    db.Stock.findById(req.params.id)
        .then(stocks => {
            res.render('stock-detail', {
                stock: stocks
            })
        })
            .catch(() => res.send('404'))
})
// New Route (GET/Read): This route renders a form 
// which the user will fill out to POST (create) a new location
router.get('/new', (req, res) => {
    res.send('new-form')
})


// Create Route (POST/Create): This route receives the POST request sent from the new route,
// creates a new stock document using the form data, 
// and redirects the user to the new stock's show page
router.post('/', (req, res) => {
    db.Stock.create(req.body)
        .then(stock => res.redirect('/stock/' + stock._id))
})


// Edit Route (GET/Read): This route renders a form
// the user will use to PUT (edit) properties of an existing stock
router.get('/:id/edit', (req, res) => {
    db.Stock.findById(req.params.id)
        .then(stock => {
            res.render('edit-form',{
                stock: stock
            })
        })
})


// Update Route (PUT/Update): This route receives the PUT request sent from the edit route, 
// edits the specified pet document using the form data,
// and redirects the user back to the show page for the updated location.
router.put('/:id', (req, res) => {
    db.Stock.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(stock => res.redirect('/stocks/' + stock.id))
})


// Destroy Route (DELETE/Delete): This route deletes a pet document 
// using the URL parameter (which will always be the pet document's ID)
router.delete('/:id', (req, res) => {
    db.Stock.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/stocks'))
})


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router

