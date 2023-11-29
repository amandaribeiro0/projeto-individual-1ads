function cadastrarFormulario() {
    // aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var personagemFav = id_personagemFav.value;
    var temporadaFav = id_temporadaFav.value;
    var reviravolta = id_reviravolta.value;
    var notaSerie = Number(id_notaSerie.value);
    var idUsuario = sessionStorage.ID_USUARIO;

    if (idUsuario == undefined) {
      alert(`É necessario fazer login para enviar seus formulario;`)
      setTimeout(function () {
        window.location = "login.html";
      }, 800);
    }
    if (
      personagemFav == "" ||
      temporadaFav == "" ||
      reviravolta == "" ||
      notaSerie == ""
    ) {
      // finalizarAguardar();
      return false;
    }
    // else {
    //   setInterval(sumirMensagem, 5000);
    // }

    // Enviando o valor da nova input
    fetch("/formulario/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        personagemFavServer: personagemFav,
        temporadaFavServer: temporadaFav,
        reviravoltaServer: reviravolta,
        notaSerieServer: notaSerie,
        idUsuarioServer: idUsuario
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {

          setTimeout(function () {
            window.location = "index.html";
          }, 1000);
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }


      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
            alert('Você já preencheu esse formulario, obrigada!')
      });

    return false;
  }

