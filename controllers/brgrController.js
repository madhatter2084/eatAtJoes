var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", function(req, res){
    res.redirect("/eatatjoes");
});

router.get("/eatatjoes", function(req, res){
    burger.all(function(burgerData){
        res.render("index", { burger_data: burgerData });
    });
});

router.post("/eatatjoes/create", function(req, res){
    burger.create(req.body.burger_name, function(result){
        console.log(result);
        res.redirect("/");
    });
});

router.put("/eatatjoes/:id", function(req, res){
    burger.update(req.params.id, function(result){
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;