var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController")

router.post("/buscarDados", function(req, res) {
    dashboardController.buscarDados(req, res)
})

module.exports = router