const perguntasBlindspot = [
    {
      pergunta: "Qual é o nome da protagonista da série 'Blindspot'?",
      opcoes: ["Alice Johnson", "Jane Doe", "Emily Smith", "Linda Parker"],
      respostaCorreta: "Jane Doe"
    },
    {
      pergunta: "O nome de qual agente está tatuado nas costas de Jane?",
      opcoes: ["David Patterson", "Tasha Zapata","Kurt Weller","Edgar Reade"],
      respostaCorreta: "Kurt Weller"
    },
    {
      pergunta: "O que está tatuado nas costas de Jane que chama a atenção na primeira temporada?",
      opcoes: ["Um código de barras", "Um mapa do tesouro", "Uma lista de nomes", "Um desenho abstrato"],
      respostaCorreta: "Um código de barras"
    },
    {
      pergunta: "Quem é o vilão principal na primeira temporada?",
      opcoes: ["Shepherd", "Oscar", "Roman", "Borden"],
      respostaCorreta: "Shepherd"
    },
    {
      pergunta: "Em que cidade a Jane doe foi encontrada na mala?",
      opcoes: ["Nova Iorque", "Los Angeles", "São Paulo", "Orlando"],
      respostaCorreta: "Nova Iorque"
    },
    {
      pergunta: "Qual é o nome do irmão de Jane?",
      opcoes: [ "Roman", "Shepherd", "Borden","Oscar"],
      respostaCorreta: "Roman"
    },
    {
      pergunta: "Quem é Rich Dotcom?",
      opcoes: ["Inimigo de Jane", "Hacker aliado", "Amigo de Kurt", "Vilão da primeira temporada"],
      respostaCorreta: "Hacker aliado"
    },
    {
      pergunta: "Quem matou a Mayfair?",
      opcoes: ["Oscar", "Jane", "Patterson", "Zapata"],
      respostaCorreta: "Oscar"
    },
    {
      pergunta: "Qual é o nome da organização criminosa na série?",
      opcoes: ["Sandstorm", "Red Hand", "Black Sun", "Cobra"],
      respostaCorreta: "Sandstorm"
    },
    {
      pergunta: "Qual é o destino final de Jane no final da série?",
      opcoes: ["Morrer", "Ficar com Kurt", "Desaparecer", "Trabalhar para o FBI"],
      respostaCorreta: "Ficar com Kurt"
    }
  ];

  let perguntaAtual = 0;
  let pontuacao = 0;

  function carregarPergunta() {
    const perguntaElemento = document.getElementById('pergunta');
    const opcoesElemento = document.getElementById('opcoes');
    const resultadoElemento = document.getElementById('resultado');

    perguntaElemento.textContent = perguntasBlindspot[perguntaAtual].pergunta;

    opcoesElemento.innerHTML = "";
    for (let i = 0; i < perguntasBlindspot[perguntaAtual].opcoes.length; i++) {
      const opcaoElemento = document.createElement('div');
      opcaoElemento.className = 'option';
      opcaoElemento.textContent = perguntasBlindspot[perguntaAtual].opcoes[i];
      opcaoElemento.addEventListener('click', () => selecionarOpcao(i));
      opcoesElemento.appendChild(opcaoElemento);
    }

    resultadoElemento.textContent = "";
  }

  function selecionarOpcao(index) {
    // Limpar a seleção anterior
    const opcoes = document.querySelectorAll('.option');
    opcoes.forEach(opcao => opcao.classList.remove('selected'));

    // Adicionar classe 'selected' à opção clicada
    const opcaoSelecionada = document.querySelectorAll('.option')[index];
    opcaoSelecionada.classList.add('selected');
  }

  function verificarResposta() {
    const opcaoSelecionada = document.querySelector('.option.selected');
    if (opcaoSelecionada) {
      const index = Array.from(opcaoSelecionada.parentNode.children).indexOf(opcaoSelecionada);
      const respostaCorreta = perguntasBlindspot[perguntaAtual].respostaCorreta;

      if (perguntasBlindspot[perguntaAtual].opcoes[index] === respostaCorreta) {
        pontuacao++;
      }
    }

    perguntaAtual++;

    if (perguntaAtual < perguntasBlindspot.length) {
      carregarPergunta();
    } else {
      mostrarResultadoFinal();
      cadastrarQuiz();
    }
  }

  function mostrarResultadoFinal() {
    const containerQuiz = document.getElementById('quiz-container');
    containerQuiz.innerHTML = `<h2 class="result">Você terminou o quiz! Sua pontuação final: ${pontuacao} de ${perguntasBlindspot.length}</h2>`;
  }

  
  function cadastrarQuiz() {
    // aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var pontuacaoFinal = pontuacao;
    var idUsuario = sessionStorage.ID_USUARIO;

    if (idUsuario == undefined) {
      alert(`É necessario fazer login para cadastrar seu quiz`)
      setTimeout(function () {
        window.location = "login.html";
      }, 800);
    }
    if (
      pontuacaoFinal == ""
    ) {
      // finalizarAguardar();
      return false;
    }
    // else {
    //   setInterval(sumirMensagem, 5000);
    // }

    // Enviando o valor da nova input
    fetch("/quiz/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        qtdAcertosServer: pontuacaoFinal,
        idUsuarioServer: idUsuario
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            console.log('Quiz cadastrado com sucesso')
          // setTimeout(function () {
          //   window.location = "index.html";
          // }, 1000);
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }

       
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
      });

    return false;
  }