var notaMedia = document.getElementById("id_notaMedia")
var mediaQuiz = document.getElementById("id_mediaQuiz")
var usersCadastrados = document.getElementById("id_usersCadastrados")

function buscarDados() {
    fetch("/dashboard/buscarDados", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then(json => {
                notaMedia.innerHTML = (Number(json.notaMedia))
                mediaQuiz.innerHTML= (Number(json.quizMedia))
                usersCadastrados.innerHTML = json.qtdUsers
               
            })
        } else {
            console.log("Houve um erro ao tentar realizar coletar os dados!");
            resposta.text().then(texto => {
                console.error(texto);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}
