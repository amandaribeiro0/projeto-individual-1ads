var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController")

router.post("/buscarDados", function(req, res) {
    dashboardController.buscarDados(req, res)
})

router.post("/buscarTemporadas", function(req,res){
    dashboardController.buscarTemporadas(req,res)
})

router.post("/buscarPersonagens", function(req,res){
    dashboardController.buscarPersonagens(req,res)
})

module.exports = router