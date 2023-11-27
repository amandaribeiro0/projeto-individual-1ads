var notaMedia = document.getElementById("id_notaMedia")
var mediaQuiz = document.getElementById("id_mediaQuiz")
var usersCadastrados = document.getElementById("id_usersCadastrados")

var personagem1 = 0
var personagem2 = 0
var personagem3 = 0
var personagem4 = 0
var personagem5 = 0
var personagem6 = 0
var personagem7 = 0
var personagem8 = 0


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

function buscarPersonagens() {
    fetch("/dashboard/buscarPersonagens", {
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
                console.log(json.personagens)
                personagem1 = json.personagens[0]
                personagem2 = json.personagens[1]
                personagem3 = json.personagens[2]
                personagem4 = json.personagens[3]
                personagem5 = json.personagens[4]
                personagem6 = json.personagens[5]
                personagem7 = json.personagens[6]
                personagem8 = json.personagens[7]

                setTimeout(()=> {
                    plotarGrafico()

                }, 10)
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
buscarPersonagens()
function plotarGrafico(){
    
  const ctx = document.getElementById('chartTemporadas');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['1º', '2º', '3º', '4º', '5º'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const ctxPersonagem = document.getElementById('chartPersonagens');

  new Chart(ctxPersonagem, {
    type: 'bar',
    data: {
      labels: [personagem1.personagemFav, 
        personagem2.personagemFav, 
        personagem3.personagemFav, 
        personagem4.personagemFav, 
        personagem5.personagemFav,
        personagem6.personagemFav,
        personagem7.personagemFav,
        personagem8.personagemFav],
      datasets: [{
        label: '# of Votes',
        data: [personagem1.qtdPersonagem,
            personagem2.qtdPersonagem, 
            personagem3.qtdPersonagem, 
            personagem4.qtdPersonagem, 
            personagem5.qtdPersonagem, 
            personagem6.qtdPersonagem,
            personagem7.qtdPersonagem,
            personagem8.qtdPersonagem],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}
