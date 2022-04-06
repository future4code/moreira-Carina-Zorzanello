Exercício 1

a) *Explique como é a resposta que temos quando usamos o `raw`.* 

Resposta: O raw traz apenas o objeto no qual o usuário está solicitando e caso não usemos ele, ele vai trazer diversas informações que o usuário não necessita.

b) *Faça uma função que busque um ator pelo nome;*

const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result
}

c) *Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.*

const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
	
  const count = result[0][0].count;
  return count;
};

Exercício 2

a) *Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão*

const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

b) *Uma função que receba um id e delete um ator da tabela*

const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
};

c) *Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`*

const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};

Exercício 3

