var database = require("../database/config")

function buscarNotaSerie() {
    var instrucao = ` SELECT ROUND(AVG(notaSerie),1) as mediaNota FROM formulario;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarMediaQuiz() {
    var instrucao = `SELECT ROUND(AVG(qtdAcertos),1) as mediaQuiz FROM respostaquiz;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarQtdUsuario() {
    var instrucao = `SELECT COUNT(*) as qtdUsers FROM usuario;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    buscarNotaSerie,
    buscarMediaQuiz,
    buscarQtdUsuario
}