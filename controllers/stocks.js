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
// router.get('/', function (req, res) {
//     db.Stock.find({})
//         .then(stocks => res.json(stocks))
// })

router.get('/', function (req, res) {
    db.Stock.find({})
    .then(stocks => {
        res.render('stock-index', {
            stocks: stocks
        })
    })
})


// router.get('/:id', function (req, res){
//     db.Stock.findById(req.params.id)
//     .then(stocks => {
//         res.render('stock-detail', {
//             stocks: stocks
//         })
//     })
// })

// Show Route (GET/Read): Will display an individual stock document
// using the URL parameter (which is the document _id)
router.get('/:id', function (req, res) {
    db.Stock.findById(req.params.id)
        .then(stocks => {
            res.render('stock-detail', {
                stock: stocks
            })
        })
            .catch(() => res.send('404 Error: Gary Rocks'))
})



/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router

