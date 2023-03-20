/* Require modules
--------------------------------------------------------------- */
const express = require('express')
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')
// const stock = require('../models/stock');

/* Routes
--------------------------------------------------------------- */
// Index Route 
router.get('/', (req, res) => {
    db.stock.find({}, { reviews: true, _id: false })
        .then(stocks => {
            const flatList = []
            for (let stock of stocks) {
                flatList.push(...stock.reviews)
            }
            console.log(flatList, stocks)
            res.render('reviews/rev-index.ejs', {
                revs: flatList
            })
        })
});


// New Route
router.get('/new/:stockId', (req, res) => {
    db.stock.findById(req.params.stockId)
        .then(stock => {
            res.render('reviews/new-form', { stock: stock })
        })
        .catch(() => res.render('404'))
})

router.get('/read/:id', (req, res) => {
    db.stock.findOne(
        { 'reviews._id': req.params.id },
        { 'reviews.$': true, _id: false }
    )
        // .then(product => {
        //     console.log(product)
        //     res.render('reviews/app-details'), {
        // })
        .then(stock => {
            console.log(stock)
            res.render('reviews/rev-details', {
                app: stock.reviews[0]
            })
        })
})
// Create Route
router.post('/create/:stockId', (req, res) => {
    db.stock.findByIdAndUpdate(
        req.params.stockId,
        { $push: { reviews: req.body } },
        { new: true }
    )
        .then(() => res.redirect('/reviews'))
});


// Show Route
router.get('/:id', (req, res) => {
    db.stock.findOne(
        { 'reviews._id': req.params.id },
        { 'reviews.$': true, _id: false }
    )
        .then(stock => {
            res.render('reviews/rev-details', {
                app: stock.reviews[0]
            })
        })
        .catch(() => res.render('404'))
});


// Destroy Route
router.delete('/:id', (req, res) => {
    db.stock.findOneAndUpdate(
        { 'reviews._id': req.params.id },
        { $pull: { reviews: { _id: req.params.id } } },
        { new: true }
    )
        .then(() => res.redirect('/reviews'))
});


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router