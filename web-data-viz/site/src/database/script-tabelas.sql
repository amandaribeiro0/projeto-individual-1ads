-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

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


select * from formulario;
select * from usuario ORDER BY id DESC;
SELECT * FROM usuario JOIN formulario ON id = idForm;