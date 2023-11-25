var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM formulario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(personagemFav, temporadaFav, reviravolta, notaSerie, idUsuario) {
    var instrucao = `
        INSERT INTO formulario (idForm, personagemFav, temporadaFav, reviravolta,notaSerie,fkUsuario) VALUES ('${idUsuario}','${personagemFav}','${temporadaFav}','${reviravolta}',${notaSerie},${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};