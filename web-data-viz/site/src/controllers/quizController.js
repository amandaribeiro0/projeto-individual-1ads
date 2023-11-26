var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    var qtdAcertos = req.body.qtdAcertosServer;
    var idUsuario = req.body.idUsuarioServer;

    if (qtdAcertos == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else  if (idUsuario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrar(qtdAcertos,idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                        res.status(500).json(erro.sqlMessage);
             
                }
            );
    }

}

module.exports = {
    cadastrar
}