var dashboardModel = require("../models/dashboardModel")

function buscarDados(req, res) {
    dashboardModel.buscarNotaSerie().then((respostaNota)=> {
        dashboardModel.buscarMediaQuiz().then((respostaQuiz)=> {
            dashboardModel.buscarQtdUsuario().then((respostaUser)=> {
           
                    console.log(respostaNota)
                    console.log(respostaQuiz)
                    console.log(respostaUser)
                  
                    res.json({
                        notaMedia: respostaNota[0].mediaNota,
                        quizMedia: respostaQuiz[0].mediaQuiz,
                        qtdUsers: respostaUser[0].qtdUsers
                    })
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    buscarDados
}