 Respostas dos exercícios!!

 Exercício 1
 
 A)
 CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

 Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.

 - VARCHAR(255): significa a quantidade de caracteres disponíveis para o usuário digitar, este comando com valor (255) é padrão;
 - PRIMARY KEY: significa a chave principal e que identifica a tabela, toda tabela deve possuir uma e única;
 - NOT NULL: Este comando serve para que não seja possível este campo ficar em branco sem preenchimento, ele obrigatoriamente precisa ler um valor;
 - DATE:  representa uma data seguindo este padrão: ano, mês, dia (YYYY-MM-DD).

 b) O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.

 - SHOW DATABASES - trouxe os bancos de dados armazenados no sql
 - SHOW TABLES - trouxe todas as tabelas criadas.

 c) O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando  DESCRIBE Actor e explique os resultados.

 - DESCRIBE Actor - deve trazer os nomes de atores cadastrados na tabela, como ainda não cadastramos nenhum, irá aparecer apenas os dados solicitados de preenchimento da tabela.

 Exercicio 2

 *a) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*

 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23",
  "female"
);

b) *Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Maria",
  1200000,
  "1963-08-23",
  "female"
);

Erro: Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Ou seja, Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'

Este erro aconteceu, pois tentei criar um novo elemento porém passando o mesmo Id e como id são únicos isso não será possível.

c)INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

Erro: Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1
Os parametros inseridos estão errados, pois faltam parametros a serem passados.

d)
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

Error Code: 1364. Field 'name' doesn't have a default value
Código de erro: 1364. O campo 'nome' não tem um valor padrão

Aqui tínhamos dois erros, nos parâmetros faltava passar nome e nos valores faltava passar o nome também.

e) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

Erro: Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1

Faltou as "" na data.

Criar mais 1 ator e atriz:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Fernanda Souza",
  719333.33,
  "1984-4-18", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "008", 
  "Rodrigo Santoro",
  719333.33,
  "1984-4-18", 
  "male"
);

Exercicio 3
a) *Escreva uma query que retorne todas as informações das atrizes*

Resposta: SELECT id, name, salary, birth_date from Actor WHERE gender = "female"

b) *Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*

Resposta: SELECT name, salary from Actor WHERE name = "Tony Ramos"

c) *Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*

Resposta: SELECT id, name, salary, birth_date from Actor WHERE gender = "invalid";
Voltou como Null, pois não temos nenhum cadastro de atriz e ator que tenha este campo vazio sem preenchimento.

d) *Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*
Resposta: 

SELECT id, name, salary from Actor WHERE salary <= 500000;

001	Tony Ramos	400000
004	Fernanda Montenegro	300000
005	Cleo Pires	400000

e) **T*ente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta*

SELECT id, nome from Actor WHERE id = "002"

Erro: Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'

Apareceu este erro pois NOME está escrito errado, lá nos parametros está escrito em inglês e na solicitação foi passado em português, por este motivo deu erro.

correto seria: SELECT id, name from Actor WHERE id = "002"


Exercicio 4

a) *Explique com as suas palavras a query acima*

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

Resposta: Esta query está fazendo a busca na tabela por aqueles atores ou atrizes que comecem o nome com A ou J e que ganham um salário maior que 300000.

b) *Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00*

SELECT * FROM Actor
WHERE (name NOT LIKE "A%" OR name LIKE "J%") AND salary > 35000000;

c) *Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.* 

SELECT * FROM Actor
WHERE (name LIKE "G%" OR name LIKE "g%");

002	Gloria Pires	1200000	1963-08-23	female

d) *Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*

SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary >= 350000.00 OR salary >=900000.00

001	Tony Ramos	400000	1948-08-25	male
002	Gloria Pires	1200000	1963-08-23	female
003	Maria	1200000	1963-08-23	female
006	Juliana Paes	719333	1979-03-26	female
007	Fernanda Souza	719333	1984-04-18	female
008	Rodrigo Santoro	719333	1984-04-18	male

Exercicio 5

a) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

*Crie 4 filmes com as seguintes informações:*

b)
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "001", 
  "Se eu fosse Voce",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
  Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  "7"
);

c) 
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
  A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
  empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  "10"
);

d)
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
  que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  "8"
);

e) 
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "004", 
  "Cidade de Deus",
  "O filme retrata o crescimento do crime organizado na Cidade de Deus, 
  uma favela que começou a ser construída nos anos 1960 e se tornou um dos lugares mais perigosos do 
  Rio de Janeiro no começo dos anos 1980.",
  "2002-02-02", 
  "10"
);

Exercicio 6

a) Retorne o id, título e avaliação a partir de um id específico; 
SELECT id, title, rating FROM Movie WHERE id = "004";

004	Cidade de Deus	10,

b) Retorne um filme a partir de um nome específico;
SELECT * FROM Movie WHERE title = "Cidade de Deus";
004	Cidade de Deus	O filme retrata o crescimento do crime organizado na Cidade de Deus, 
   uma favela que começou a ser construída nos anos 1960 e se tornou um dos lugares mais perigosos do 
   Rio de Janeiro no começo dos anos 1980.	2002-02-02	10

c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7
SELECT id, title, synopsis FROM Movie WHERE rating > 7;

001	Se eu fosse Voce	Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
   Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos
002	Doce de mãe	Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
   A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
   empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela
003	Dona Flor e Seus Dois Maridos	Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
   que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.
004	Cidade de Deus	O filme retrata o crescimento do crime organizado na Cidade de Deus, 
   uma favela que começou a ser construída nos anos 1960 e se tornou um dos lugares mais perigosos do 
   Rio de Janeiro no começo dos anos 1980.

   Exercicio 7

   Escreva uma query que:

a) Retorna um filme cujo título contenha a palavra `vida`

Resposta: SELECT * from Movie WHERE title = "vida";
Porém retornou null pois nenhum possui o nome de Vida.

b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.

SELECT title from Movie WHERE title = "Doce de mae";

Termo está contido no título.

c) Procure por todos os filmes que já tenham lançado

SELECT * FROM Movie WHERE release_Date >= 2022-04-04;

d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.

SELECT * FROM Movie
WHERE (title LIKE "%mae%" OR synopsis LIKE "%Doce%") AND rating >7;
