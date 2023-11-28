var notaMedia = document.getElementById("id_notaMedia")
var mediaQuiz = document.getElementById("id_mediaQuiz")
var usersCadastrados = document.getElementById("id_usersCadastrados");

var nomeUser = sessionStorage.NOME_USUARIO;

if(nomeUser == undefined){
    nomeUser = 'usuario'
}

nomeUsuario.innerHTML = nomeUser;

var personagem1 = 0
var personagem2 = 0
var personagem3 = 0
var personagem4 = 0
var personagem5 = 0
var personagem6 = 0
var personagem7 = 0
var personagem8 = 0

var temporada1 = 0
var temporada2 = 0
var temporada3 = 0
var temporada4 = 0
var temporada5 = 0

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


function buscarTemporadas() {
    fetch("/dashboard/buscarTemporadas", {
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
                console.log(json)
                

                temporada1 = json.temporadas[0]
                temporada2 = json.temporadas[1]
                temporada3 = json.temporadas[2]
                temporada4 = json.temporadas[3]
                temporada5 = json.temporadas[4]

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
buscarTemporadas();


function plotarGrafico(){
    
  const ctx = document.getElementById('chartTemporadas');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [temporada1.temporadaFav, 
        temporada2.temporadaFav, 
        temporada3.temporadaFav, 
        temporada4.temporadaFav, 
        temporada5.temporadaFav],
      datasets: [{
        label: 'Quantidade de votos',
        data: [temporada1.qtdTemporada, 
            temporada2.qtdTemporada, 
            temporada3.qtdTemporada, 
            temporada4.qtdTemporada,
            temporada5.qtdTemporada],
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#2d5651d0',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
            display: true,
            text: 'Temporada favorita dos usuarios',
            font: {
                size: 24
            },
            color: 'white'
        },
        legend: {
            display:false,
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
        label: 'Quantidade de votos',
        data: [personagem1.qtdPersonagem,
            personagem2.qtdPersonagem, 
            personagem3.qtdPersonagem, 
            personagem4.qtdPersonagem, 
            personagem5.qtdPersonagem, 
            personagem6.qtdPersonagem,
            personagem7.qtdPersonagem,
            personagem8.qtdPersonagem],
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#2d5651d0',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
            display: true,
            text: 'Personagens favoritos dos usuarios',
            font: {
                size: 24
            },
            color: 'white'
        },
        legend: {
            display:false,
        }
    }
      
    }
  });

}
