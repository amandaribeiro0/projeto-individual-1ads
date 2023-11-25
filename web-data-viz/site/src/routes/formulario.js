var express = require("express");
var router = express.Router();

var formularioController = require("../controllers/formularioController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    formularioController.cadastrar(req, res);
});

// router.get("/listar", function (req, res) {
//     // função a ser chamada quando acessar /carros/listar
//     formularioController.listar(req, res);
// });

module.exports = router;