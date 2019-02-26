const express = require("express");
const router = express.Router()
const Model = require("../models");

//Show List of Players by Club Name
router.get("/", function (req, res) {
    Model.Players.findAll({
        include:[Model.Clubs],
        order: [['id', 'ASC']]
    })
        .then(data => {
            res.render("players/players", {
                listPlayers: data
            })
        })

        .catch(err => {
            res.send(err.message);
        })
})

//Register Player
router.get("/register", function (req, res) {
    res.render("players/register");
}).post("/register", function (req, res) {
    Model.Players.create(req.body)
        .then(() => {
            res.redirect("/players");
        })
        .catch(err => {
            res.send(err.message);
        })
})

module.exports = router;