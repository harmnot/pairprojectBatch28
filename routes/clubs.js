const express = require("express");
const router = express.Router()
const Model = require("../models");

//Show List Clubs
router.get("/", function (req, res) {
    Model.Clubs.findAll({
        order: [['id', 'ASC']]
    })
        .then(data => {
            res.render("clubs/clubs", {
                listClubs: data
            })
        })
        
        .catch(err => {
            res.send(err.message);
        })
})

module.exports = router;