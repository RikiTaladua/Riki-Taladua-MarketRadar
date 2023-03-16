/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/applications`
---------------------------------------------------------------------------------------
*/


/* Require modules
--------------------------------------------------------------- */
const express = require('express')
// Router allows us to handle routing outisde of server.js
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')


/* Routes
--------------------------------------------------------------- */
// Index Route (All Applications): 
// GET localhost:3000/applications/
router.get('/', (req, res) => {
	db.Stock.find({}, { applications: true, _id: false })
        .then(stocks => {
		    // format query results to appear in one array, 
		    // rather than an array of objects containing arrays 
	    	const flatList = []
	    	for (let stock of stocks) {
	        	flatList.push(...stock.applications)
	    	}
	    	res.json(flatList)
		}
	)
});

// New Route: GET localhost:3000/applications/new
router.get('/new/:stockId', (req, res) => {
    db.Stock.findById(req.params.stockId)
        .then(stock => {
            res.render("applications/nwe-from", { stock: stock})
        })
        .catch(() => res.render("404"))
})        

// Create Route: POST localhost:3000/applications/
router.post('/create/:stockId', (req, res) => {
    db.Stock.findByIdAndUpdate(
        req.params.stockId,
        { $push: { applications: req.body } },
        { new: true }
    )
        .then(() => res.redirect("/applications"))
});

// Show Route: GET localhost:3000/applications/:id
router.get('/:id', (req, res) => {
    db.Stock.findOne(
        { 'applications._id': req.params.id },
        { 'applications.$': true, _id: false }
    )
        .then(stock => {
            // format query results to appear in one object, 
            // rather than an object containing an array of one object
            res.render('applications/app-details', {
                app: stock.applications[0]
            })
        })
        .catch(() => res.render('404'))
});

// Destroy Route: DELETE localhost:3000/applications/:id
router.delete('/:id', (req, res) => {
    db.Pet.findOneAndUpdate(
        { 'applications._id': req.params.id },
        { $pull: { applications: { _id: req.params.id } } },
        { new: true }
    )
        .then(() => res.redirect("/applications"))
});


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
