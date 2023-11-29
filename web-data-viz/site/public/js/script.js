var listaImagens = ['https://i.imgur.com/ZW2wzxJ.jpg',
    'https://i.imgur.com/wJsJPuu.jpg',
    'https://i.imgur.com/LO14etV.jpg',
    'https://i.imgur.com/BISy8eF.jpg',
    'https://i.imgur.com/cMpzBAI.jpg0',
    'https://i.imgur.com/RXcIavu.jpg',
    'https://i.imgur.com/DAEnDoS.jpg',
    'https://i.imgur.com/MI1rtnF.jpg',
    'https://i.imgur.com/kuzVUzr.jpg',
    'https://i.imgur.com/n3HWBOT.jpg',
    'https://i.imgur.com/xjU5Dqk.jpg',
    'https://i.imgur.com/ubNtaBA.jpg',
    'https://i.imgur.com/7FFAhoK.jpg',
    'https://i.imgur.com/DeI4fOS.jpg',
    'https://i.imgur.com/PrzbYME.jpg',
    'https://imgur.com/U489zrp',
    'https://i.imgur.com/IvyX3wS.jpg',
    'https://i.imgur.com/nbLh37U.jpg',
    'https://i.imgur.com/RbQr65l.jpg',];

function sortearImagem() {
    resultadoImg.innerHTML = `<img src="${listaImagens[parseInt(Math.random() * listaImagens.length)]}" alt="">`
}

function sobreSerie() {
    id_sobre.innerHTML = ` 
    <h1>SOBRE A SÉRIE</h1>
    <p class="headline">"Blindspot" é uma série de televisão repleta de ação, mistério e reviravoltas que cativou
            audiências em todo
            o mundo. A trama gira em torno de uma mulher misteriosa chamada Jane Doe, que é encontrada em plena Times
            Square, coberta de tatuagens intricadas e sem nenhuma memória de seu passado. Cada tatuagem em seu corpo
            contém pistas para crimes e conspirações que a equipe de investigação, liderada por Kurt Weller, precisa
            decifrar.

            À medida que a série se desenrola, os personagens principais enfrentam uma série de desafios que vão desde a
            resolução de crimes complexos até a luta contra organizações secretas e ameaças globais. A narrativa é
            repleta de suspense, ação e tensão, mantendo os espectadores à beira de seus assentos a cada episódio.

            Além das intrigantes tramas de investigação, "Blindspot" também explora temas como identidade, lealdade e
            redenção. A personagem principal, Jane Doe, luta para descobrir sua verdadeira identidade e enfrenta as
            consequências de seu passado misterioso. À medida que os relacionamentos se desenvolvem e segredos são
            revelados, a série mergulha nas complexidades do lado humano de seus personagens.

            Com um elenco talentoso, roteiro envolvente e ação de tirar o fôlego, "Blindspot" oferece uma experiência
            única e emocionante para os fãs de séries de suspense e investigação. Ao longo de suas temporadas, a série
            mantém os espectadores intrigados e ansiosos para desvendar os enigmas que cercam as tatuagens de Jane Doe e
            os segredos que escondem. Com seu equilíbrio entre suspense e drama pessoal, "Blindspot" continua a ser uma
            escolha popular para os amantes de mistério e intriga.

            Ao longo de todas as temporadas, "Blindspot" mantém uma mistura de ação, suspense, intrigas e drama pessoal,
            mantendo os espectadores envolvidos na busca para decifrar as tatuagens de Jane e as complexidades dos
            personagens e das tramas. <br>
            Conheça um pouco de cada temporada:
            <br> <br>
        <div class="container-temporada">
            <div class="box-temporada">
                <h3>Temporada 1</h3>
                A primeira temporada introduz Jane Doe, uma mulher misteriosa coberta de tatuagens que é encontrada em
                Times
                Square. Cada tatuagem contém pistas para crimes e conspirações que a equipe liderada por Kurt Weller
                começa
                a investigar. A temporada explora a busca pela identidade de Jane, sua ligação com uma organização
                criminosa
                chamada Sandstorm e os desafios de decifrar as tatuagens. A equipe enfrenta ameaças crescentes e
                segredos
                surpreendentes.
            </div>

            <div class="box-temporada">
                <h3>Temporada 2</h3>
                Na segunda temporada, a equipe continua a desvendar os segredos por trás das tatuagens de Jane e a
                enfrentar
                novos desafios. A história aprofunda os relacionamentos entre os personagens principais, enquanto eles
                tentam deter Sandstorm e outras ameaças globais. A lealdade de Jane é questionada, e as consequências de
                suas ações anteriores têm um impacto profundo na equipe.
            </div>
        </div>
        <br><br>
        <div class="container-temporada">
            <div class="box-temporada">
                <h3>Temporada 3</h3>
                A terceira temporada continua a saga de Jane e sua equipe, enquanto enfrentam conspirações, traições e
                lutas
                internas. Novos personagens e vilões são introduzidos, ampliando o alcance da narrativa. A busca por
                respostas sobre as origens de Jane e os objetivos da Sandstorm se torna ainda mais complexa.
            </div>

            <div class="box-temporada">
                <h3>Temporada 4</h3>
                Na quarta temporada, a equipe enfrenta uma nova ameaça e desvenda segredos relacionados a tecnologia de
                inteligência artificial e espionagem. A temporada explora temas de privacidade e segurança cibernética,
                enquanto a equipe trabalha para impedir uma catástrofe tecnológica.
            </div>

            <div class="box-temporada">
                <h3>Temporada 5</h3>
                A quinta e última temporada concentra-se na batalha final contra o perigoso grupo terrorista Sandstorm e
                nas
                revelações finais sobre as origens de Jane e seu passado. A temporada culmina em um confronto épico que
                decide o destino dos personagens e desvenda mistérios pendentes.
            </div>

        </div>

        </p>
        <br><br>
        <a href="personagens.html" class="botao-sobre">Conheça os principais personagens</a>
        <h3>Assista o trailer: </h3><br>
        <iframe id="videoTrailer" width="460" height="215"
            src="https://www.youtube.com/embed/RqZkit-aCTo?si=S5JbUJTPvzBFOC5O" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        <br><br>

    `
}

function sobreSite() {
    id_sobre.innerHTML = `<h1>SOBRE O SITE</h1>
    <p class="reveal">Este site dedicado à série "Blindspot" foi desenvolvido como parte do curso de Análise e Desenvolvimento de
        Sistemas na São Paulo Tech School. Nosso objetivo é aplicar o conhecimento adquirido na faculdade a um
        tópico de interesse pessoal, ao mesmo tempo em que relacionamos o projeto aos Objetivos de Desenvolvimento
        Sustentável (ODS) da ONU.
        <br><br>
        Optei por destacar as ODS 5 (Igualdade de Gênero) e ODS 3 (Saúde e Bem Estar) da ONU ao escolher a série, pois Blindspot não apenas aborda questões
        de igualdade de gênero através de personagens femininas fortes. O enredo não
        só proporciona uma representação significativa de mulheres empoderadas, mas,
        ao ser uma fonte de entretenimento, contribui para o bem-estar emocional do
        público
    </p>
    <br><br>
    <h2>Desenvolvido por:</h2>
    <h4>Amanda Ribeiro da Costa</h4>
    <div class="sobreMim reveal">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium iusto earum nobis voluptatem
            perspiciatis atque, cumque magnam, maxime consectetur repellendus commodi, possimus corporis quibusdam
            dolor
            vel laborum! Ipsam, minima earum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            consectetur
            aliquam quis in sequi ad assumenda, obcaecati, id earum soluta officia facilis quod numquam laudantium
            excepturi, exercitationem eaque quaerat mollitia!</p>

        <div class="img-redes">
            <img src="assets/images/amanda.jpg" alt="">
            <br><br>
            <a href="https://github.com/amandaribeiro1" target="_blank"> <i id="icons-sobre" class="fa-brands fa-github fa-xl"
                    style="color: #3d5854;"></i></a>
            <a href="https://www.linkedin.com/in/amanda--costa/"><i id="icons-sobre" class="fa-brands fa-linkedin fa-xl" style="color: #3d5854;"></i></a>
            <br><br><br>
        </div>
       
    </div>`



}