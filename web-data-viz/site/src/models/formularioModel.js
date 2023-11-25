var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM formulario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(personagemFav, temporadaFav, reviravolta, notaSerie) {
    var instrucao = `
        INSERT INTO formulario (personagemFav, temporadaFav, reviravolta,notaSerie ) VALUES ('${personagemFav}','${temporadaFav}','${reviravolta}',${notaSerie});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};