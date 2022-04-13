Exercicio 1 - Criar tabela para realizar cadastro de usuários:

CREATE TABLE labecommerce_users (
	id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

Exercício 2 - Trazer todos os usuários que existem no banco de dados:

SELECT id, name, email FROM labecommerce_users;

Exercício 3 - criar tabela de cadastro de produtos e cadastrar produtos

CREATE TABLE labecommerce_products (
	id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    price FLOAT, 
    image_url VARCHAR(255)
);

INSERT INTO labecommerce_products (id, name, price, image_url)
VALUES(
  "001", 
  "Notbock Lenovo",
  "250000",
  "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
);

Exercício 4 - busca pelos produtos

 SELECT id, name, price, image_url FROM labecommerce_products


 Exercício 5 - criar tabela com relação de produtos compramos para cada usuário

 CREATE TABLE labecommerce_purchases (
	id VARCHAR(255) PRIMARY KEY, 
    user_id VARCHAR(255) NOT NULL, 
    product_id VARCHAR(255) NOT NULL, 
    quantity FLOAT,
    total_price FLOAT,
    FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
	FOREIGN KEY (product_id) REFERENCES labecommerce_products(id)
);



Exercício 6  - criar endpoint onde traga a relação de compras através do id do usuario

SELECT T.*, u.name  FROM labecommerce_purchases T
INNER JOIN labecommerce_users u on (u.id = T.user_id);