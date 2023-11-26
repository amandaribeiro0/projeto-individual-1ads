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
    }
  }

  function mostrarResultadoFinal() {
    const containerQuiz = document.getElementById('quiz-container');
    containerQuiz.innerHTML = `<p class="result">Você terminou o quiz! Sua pontuação final: ${pontuacao} de ${perguntasBlindspot.length}</p>`;
  }
