CREATE DATABASE projetoIndividual;
USE projetoIndividual;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE formulario(
	idForm INT,
    personagemFav VARCHAR(30),
    temporadaFav VARCHAR(30),
    reviravolta VARCHAR(150),
    notaSerie INT,
    fkUsuario INT,
    constraint fk_User_Form foreign key (fkUsuario) references usuario(id),
    primary key(idForm, fkUsuario)
);

CREATE TABLE respostaQuiz(
	idRespostaQuiz INT AUTO_INCREMENT PRIMARY KEY,
    qtdAcertos INT,
    fkUsuario INT,
    constraint fk_User_Quiz foreign key (fkUsuario) references usuario(id)
);

select * from respostaQuiz;
select * from formulario;
select * from usuario ORDER BY id DESC;

SELECT * FROM usuario JOIN respostaQuiz ON id = fkUsuario;
SELECT * FROM usuario JOIN formulario ON id = idForm;

-- querys para dashboard
-- graficos
 SELECT personagemFav,COUNT(*) as qtdPersonagem FROM formulario GROUP BY personagemFav order by personagemFav;
 SELECT temporadaFav,COUNT(*) as qtdTemporada FROM formulario GROUP BY temporadaFav ORDER BY temporadaFav;
 -- kpis
 SELECT ROUND(AVG(notaSerie),1) FROM formulario;
 SELECT ROUND(AVG(qtdAcertos),1) FROM respostaquiz;
 SELECT COUNT(*) FROM usuario;