import express, {Express} from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import knex from "knex"

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
  }
});

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (request, response) => {
	console.log("Acessei o meu endpoint")

	response.send("Poing")
})

//Exercicio 1

// A) função onde traz um ator através do seu id
const getActorById = async (id: string): Promise<any> => {
    
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
    return result[0][0]
  }

  // A) Busca um ator pelo seu id
  app.get('/actor/:id', async(req, res) => {
    try {
        const id = req.params.id
    
        console.log(await getActorById(id))
    
        res.end()
    }
    catch(error) {
       console.log("error.message");
       res.status(500).send("An unexpected error occurred")
    }
    })
    

    // B) função na qual traz um ator pelo seu nome
const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE upper(name) like upper("%${name}%")
    `)
    return result[0][0]
    }

// B) busca um ator pelo seu nome.
app.get('/actor/:name', async(req, res) => {
    try {
        const name = req.params.name
    
        console.log(await searchActor(name))
    
        res.end()
    }
    catch(error) {
       console.log("error.message");
       res.status(500).send("An unexpected error occurred")
    }
    })


// C) função que traz uma lista de atores e atrizes buscando pelo genero
const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
        
    const count = result[0][0];
    return count;
    };


// C) endpoint que traz uma lista de atores e atrizes tendo o genero como parametro
app.get('/actor/:gender', async(req, res) => {
try {
    const gender = req.params.gender
    
    console.log(await countActors(gender))

    res.end()
    console.log(gender)
}
catch(error) {
    console.log("error.message");
    res.status(500).send("An unexpected error occurred")
}
})


//Eercicio 2

//A) funcao que recebe id e salario de um ator/atriz e atualiza
const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };

  //A) Endpoint onde atualiza o salario de um ator/atriz
  app.put('/actor/:id', async(req, res) => {
    try{
        const id = req.params.id
        const salary = 2000
        console.log(await updateActor(id, salary))
       res.send("Sucess")
    }
    catch(error: any) {
       console.log(error.message)
       res.status(500).send("An Expected Error has occurred")
    }
 })


 //B) funcao para deletar ator da tabela
 const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  }; 

//B) endpoint para deletar ator
app.delete('/actor/:id', async(req, res) => {
    try{
        const id = req.params.id
        console.log(await deleteActor(id))

       res.send("Sucess - Ator deletado")
    }
    catch(error: any) {
       console.log(error.message)
       res.status(500).send("An Expected Error has occurred")
    }
 })


//C) funcao que recebe um genero e retorna a média salarial 

const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
  };


//C) endpoint que recebe genero e retorna a media salarial
app.get('/actor/:gender', async(req, res) => {
try {
    const gender = req.params.gender
    
    console.log(await avgSalary(gender))

    res.end()
    console.log(gender)
}
catch(error) {
    console.log("error.message");
    res.status(500).send("An unexpected error occurred")
}
})


// Exercicio 3

//A) função onde traz um ator através do seu id
const getActorById = async (id: string): Promise<any> => {
    
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
    return result[0][0]
  }

  // A) Busca um ator pelo seu id
  app.get('/actor/:id', async(req, res) => {
    try {
        const id = req.params.id
    
        console.log(await getActorById(id))
    
        res.end()
    }
    catch(error) {
       console.log("error.message");
       res.status(500).send("An unexpected error occurred")
    }
    })
    
//B) 
app.get('/actor/:gender', async(req, res) => {
try {
    const gender = req.params.gender
    
    console.log(await countActors(gender))

    res.end()
    console.log(gender)
}
catch(error) {
    console.log("error.message");
    res.status(500).send("An unexpected error occurred")
}
})


//Exercicio 4

//A) Endpoint que atualiza salario através do id
  app.put('/actor/:id', async(req, res) => {
    try{
        const id = req.params.id
        const salary = 2000
        console.log(await updateActor(id, salary))
       res.send("Sucess")
    }
    catch(error: any) {
       console.log(error.message)
       res.status(500).send("An Expected Error has occurred")
    }
 })

// B) endpoint que deleta ator da tabela

app.delete('/actor/:id', async(req, res) => {
    try{
        
    await connection("Actor").delete().where({id: req.params.id})

       res.send("Sucess - Ator deletado")
    }
    catch(error: any) {
       console.log(error.message)
       res.status(500).send("An Expected Error has occurred")
    }
 })



app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});




