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

function buscarPersonagens(){
    var instrucao = `SELECT personagemFav,COUNT(*) as qtdPersonagem FROM formulario GROUP BY personagemFav order by personagemFav;`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarTemporadas(){
    var instrucao = `SELECT temporadaFav,COUNT(*) as qtdTemporada FROM formulario GROUP BY temporadaFav ORDER BY temporadaFav;`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    buscarNotaSerie,
    buscarMediaQuiz,
    buscarQtdUsuario,
    buscarPersonagens,
    buscarTemporadas
}