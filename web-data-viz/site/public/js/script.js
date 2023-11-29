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
    id_sobreMim.style.display = 'none';
    id_sobreSerie.style.display = 'block';
}

function sobreSite() {
    id_sobreMim.style.display = 'block';
    id_sobreSerie.style.display = 'none';
}