Exercício 1

*a) Explique o que é uma chave estrangeira*

Resposta: Chave estrangeira, ou Foreign Key (FK), ou ainda chave externa é a chave que permite a referência a registros oriundos de outras tabelas. Ou seja, é o campo ou conjunto de campos que compõem a chave primária de uma outra tabela

*b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)

*c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). 
Anote e explique o resultado da query.*

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Muito bom!",
    7,
	"004"
);


Resposta: Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'INSERT INTO Rating (id, comment, rate, movie_id)  VALUES (  "001",     "Muito bo' at line 9

Ele não consegue fazer isto pois ´id não existe.

d) *Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*

ALTER TABLE Movie DROP COLUMN rating;

*e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*

DELETE FROM Movie WHERE rating = "id 002";

Resposta: Error Code: 1054. Unknown column 'rating' in 'where clause'

Ele não exclui pois esta classificação não existe.

exercicio 2

*a) Explique, com as suas palavras, essa tabela*

Resposta: Esta tabela está criando mais 2 colunas(linhas) onde iremos inserir referencias do ator e do filme.

*b) Crie, ao menos, 6 relações nessa tabela* 

Resposta: 
INSERT INTO MovieCast(movie_id, actor_id)
VALUES
("004","001"),
("002", "003"),
("004", "006"),
("007","007"),
("005","008"),
("003","005")

*c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*

INSERT INTO MovieCast(movie_id, actor_id)
VALUES
("010","001");


Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`moreira-21712263-carina-zorzanello`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Ele não cria pois está dizendo que o id é desconhecido.

*d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*

DELETE FROM Actor WHERE id = "001";
Resposta: Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`moreira-21712263-carina-zorzanello`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Ele não permite excluir pois primeiro teriamos que excluir a linha anterior que é a que está relacionando o ator com o filme.


Exercicio 3

*a) Explique, com suas palavras, a query acima. O que é o operador `ON`?*

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

Resposta: O operador ON faz com que seja possível pegarmos informações de um ator em várias tabelas.

*b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.*

Resposta: 
SELECT  m.title, m.id, r.rate
FROM Movie m
JOIN Rating r ON m.id = r.movie_id;