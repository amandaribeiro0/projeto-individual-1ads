var formularioModel = require("../models/formularioModel");



function cadastrar(req, res) {
    var personagemFav = req.body.personagemFavServer;
    var temporadaFav = req.body.temporadaFavServer;
    var reviravolta = req.body.reviravoltaServer;
    var notaSerie = req.body.notaSerieServer;

    if (personagemFav == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else  if (temporadaFav == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else  if (reviravolta == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }else  if (notaSerie == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        formularioModel.cadastrar(personagemFav, temporadaFav, reviravolta,notaSerie)
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