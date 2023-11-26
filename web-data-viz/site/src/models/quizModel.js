var database = require("../database/config")

// function listar() {
//     var instrucao = `
//         SELECT * FROM quiz;
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

function cadastrar(qtdAcertos, idUsuario) {
    var instrucao = `
        INSERT INTO respostaQuiz (qtdAcertos,fkUsuario) VALUES (${qtdAcertos},${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
    // listar
};