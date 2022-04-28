import express, {Express} from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import {knex} from "knex"

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

//Exercicio 2

app.post("/users", async (req, res) => {
  let codeError: number = 400
  try{
     await connection.raw(`
     INSERT INTO adress_users (id, cep, street, number, district, city, state)
     VALUES (
        ${Date.now().toString()},
        "${req.body.cep}",
        "${req.body.street}",
        "${req.body.number}",
        "${req.body.district}",
        "${req.body.city}",
        "${req.body.state}"
     );
     `)
     if(!req.body.cep || !req.body.street || !req.body.number || !req.body.district || !req.body.city || !req.body.state){
      codeError = 422
      throw new Error("An Expected Error has occurred");
  }
}catch(error: any) {
     console.log(error.message)
     res.status(codeError).send({message: "Sucess"})
  } 
})




app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});
