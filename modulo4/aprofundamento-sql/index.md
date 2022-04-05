Exercício 1

a) ALTER TABLE Actor DROP COLUMN salary;

Resposta: Este comando ser para remover uma coluna!

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

Resposta: Este comando serve para redeclarar uma coluna, neste caso a coluna gender se tornará sex com apenas 6 caracteres.

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

Resposta: Este comando serve para redeclarar uma coluna, neste caso a coluna gender que antes possuia um limite de 6 caracteres para escrevermos o sexo e estava definido como sex, agora passa a ser gender com limite padrão de 255 caracteres.

d) Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres.

Resposta: ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

Exercício 2 

a)  Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003

UPDATE Actor
SET 
name = "Carla Diaz",
birth_date = "1998-04-15"
WHERE id = "003";

b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.

Resposta:
UPDATE Actor
SET name = UPPER(name) 
WHERE name = "juliana pães";

UPDATE Actor
SET name = LOWER(name) 
WHERE name = "JULIANA PÃES";

c) *Escreva uma query que atualize todas as informações do ator com o id `005`*

Resposta:

UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

d) *Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.*

Resposta:

8 row(s) returned
8 linhas retornadas, ou seja eu passei id 10 porém ele está me dizendo que só tenho 8 id.

Exercício 3

a) *Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`*
Resposta:
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b) *Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00*

Resposta:

DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000


Exercício 4

a) *Escreva uma query que pegue o maior salário de todos os atores e atrizes*

Resposta: SELECT MAX(salary) FROM Actor

b) *Escreva uma query que pegue o menor salário das atrizes*

Resposta:  SELECT MIN(salary) FROM Actor WHERE gender = "female";

c) *Escreva uma query que pegue a quantidade de atrizes*

Resposta: SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) *Escreva uma query que pegue a soma de todos os salários*

Resposta: SELECT SUM(salary) FROM Actor;

Exercício 5

a) *Releia a última query. Teste-a. Explique o resultado com as suas palavras*

Resposta: Esta query retorna a quantidade total de atores separado por genero.

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender

b) *Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*

Resposta: 
SELECT id, name FROM Actor
ORDER BY name DESC;

c) *Faça uma query que retorne todos os atores ordenados pelo salário*

Resposta:
SELECT * FROM Actor
ORDER BY salary;

d) *Faça uma query que retorne os atores com os três maiores salarios*

Resposta:
SELECT * FROM Actor
ORDER BY salary DESC LIMIT 3;

e) *Faça uma query que retorne a média de salário por gênero*

Resposta:
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

Exercício 6

a) *Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.* 

Resposta: ALTER TABLE Movie ADD playing_limit_date DATE;

b) *Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*

Resposta: ALTER TABLE Movie CHANGE rating rating FLOAT;

c) *Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*

Resposta:
UPDATE Movie
SET playing_limit_date = "2022-04-18"
WHERE id = "001";

UPDATE Movie
SET playing_limit_date = "2022-04-01"
WHERE id = "002";


d) *Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*

Resposta: 
UPDATE Movie
SET synopsis = "Filme de romance"
WHERE id = "001";

Ele não da erro porém não acontece nada pois este id não existe mas.
0 linha(s) afetada(s) Linha(s) correspondida(s): 0 Alterado: 0 Avisos: 0
