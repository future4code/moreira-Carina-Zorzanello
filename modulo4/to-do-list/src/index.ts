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

// Exercício 1

app.put("/user", async (req, res) => {
    let codeError: number = 400
    try{
       await connection.raw(`
       INSERT INTO TodoListUser (name, nickname, email)
       VALUES (
          ${Date.now().toString()},
          "${req.body.name}",
          "${req.body.nickname}",
          "${req.body.email}"
       );
       `)
       if(!req.body.name || !req.body.nickname || !req.body.email){
        codeError = 422
        throw new Error("An Expected Error has occurred");
    }
}catch(error: any) {
       console.log(error.message)
       res.status(codeError).send({message: "Sucess"})
    } 
 })
 


// Exercício 2

const getUserById = async (id: string): Promise<any> => {
    
    const result = await connection.raw(`
      SELECT id, nickname FROM TodoListUser WHERE id = '${id}'
    `)
    return result[0][0]
  }

  // A) Busca um usuario pelo seu id
  app.get('/user/:id', async(req, res) => {
    try {
        const id = req.params.id
        
        console.log(await getUserById(id))
    
        res.end()
    }
    catch(error) {
       console.log("error.message");
       res.status(500).send("An unexpected error occurred")
    }
    })


// Exercicio 3

app.post('/user/edit/:id', async(req, res) => {
    let codeError: number = 400
    try{
       await connection("TodoListUser").update({
          name: req.body.name,
          nickname: req.body.nickname,
          email: req.body.email,
       }).where({id: req.params.id})
       res.send("Sucess")
       if(!req.body.name || !req.body.nickname || !req.body.email){
        codeError = 422
        throw new Error("An Expected Error has occurred");
    }
}catch(error: any) {
       console.log(error.message)
       res.status(codeError).send({message: "Sucess"})
    }
 })


// Exercicio 4

app.put("/task", async (req, res) => {
    let codeError: number = 400
    try{
       await connection.raw(`
       INSERT INTO TodoListTask (id, title, description, limit_Date, creator_User_Id)
       VALUES (
          "${Date.now().toString()}",
          "${req.body.title}",
          "${req.body.description}",
          "${new Date(req.body.limit_Date).toISOString().slice(0, 19).replace('T', ' ')}",
          "${req.body.creator_User_Id}"
       );
       `)
       if(!req.body.title || !req.body.description || !req.body.limit_Date || !req.body.creator_User_Id){
        codeError = 422
        throw new Error("An Expected Error has occurred");
    }
}catch(error: any) {
       console.log(error.message)
       res.status(codeError).send({message: "Sucess"})
    } 
 })

// Exercício 5

const getTaskById = async (id: string): Promise<any> => {
    
    const result = await connection.raw(`
    SELECT T.*, u.nickname  FROM TodoListTask T
    INNER JOIN TodoListUser u on (u.id = T.creator_user_id) WHERE T.id = '${id}'
    `)
    return result[0][0]
  }

  app.get('/task/:id', async(req, res) => {
    let codeError: number = 400
    try {
        const id = req.params.id
        
        console.log(await getTaskById(id))
    
         if(req.params.id === undefined){
            codeError = 422
            throw new Error("An Expected Error has occurred");
    }
}catch(error) {
       console.log("error.message");
       res.status(codeError).send({message: "Sucess"})
    }
    })



app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});
