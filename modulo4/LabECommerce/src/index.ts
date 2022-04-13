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

// Exercicio 1

app.post("/users", async (req, res) => {
    let codeError: number = 400
    try{
        await connection.raw(`
        INSERT INTO labecommerce_users (id, name, email, password)
        VALUES (
            "${Date.now().toString()}",
            "${req.body.name}",
            "${req.body.email}",
            "${req.body.password}"
        );
        `)
        if(!req.body.name || !req.body.email || !req.body.password){
            codeError = 422
            throw new Error("An Expected Error has occurred");
        }   
            res.send("Sucess")
    }catch(error: any) {
       console.log(error.message)
       res.status(codeError).send({message: "Sucess"})
    } 
 })

//Exercicio 2

const getUser = async (): Promise<any> => {

    const result = await connection.raw(`
      SELECT id, name, email FROM labecommerce_users
    `);
    return result[0]
  }
app.get('/user', async(req, res) => {
    try {

        console.log(await getUser())

        res.end()
    }
    catch(error) {
       console.log("error.message");
       res.status(500).send("An unexpected error occurred")
    }
    })

//Exercício 3

app.post("/products", async (req, res) => {
    let codeError: number = 400
    try{
        await connection.raw(`
        INSERT INTO labecommerce_products (id, name, price, image_url)
        VALUES (
            "${Date.now().toString()}",
            "${req.body.name}",
            "${req.body.price}",
            "${req.body.image_url}"
        );
        `)
        if(!req.body.name || !req.body.price || !req.body.image_url){
            codeError = 422
            throw new Error("An Expected Error has occurred");
        }   
            res.send("Sucess")
    }catch(error: any) {
       console.log(error.message)
       res.status(codeError).send({message: "Sucess"})
    } 
 })


//Exercício 4

const getProdutcts = async (): Promise<any> => {

    const result = await connection.raw(`
      SELECT id, name, price, image_url FROM labecommerce_products
    `);
    return result[0]
  }
app.get('/products', async(req, res) => {
    try {

        console.log(await getProdutcts())

        res.end()
    }
    catch(error) {
       console.log("error.message");
       res.status(500).send("An unexpected error occurred")
    }
    })

    //Exercício 5

    const getPrice = async (id :string): Promise<number> => {

        const result = await connection.raw(`
          SELECT price FROM labecommerce_products WHERE id = ${id}
        `);
        
        return result[0][0].price
        
    }

    app.post("/purchases", async (req, res) => {
        let codeError: number = 400
        try{
           const price = await getPrice(req.body.product_id)
           const totalPrice: Number = Number(price) * Number(req.body.quantity)
           
            await connection.raw(`
            INSERT INTO labecommerce_purchases (id, user_id, product_id, quantity, total_price)
            VALUES (
                "${Date.now().toString()}",
                "${req.body.user_id}",
                "${req.body.product_id}",
                "${req.body.quantity}",
                "${totalPrice}"
            );
            `)
            if(!req.body.user_id || !req.body.product_id || !req.body.quantity || !req.body.total_price){
                codeError = 422
                throw new Error("An Expected Error has occurred");
            }   
                res.send("Sucess")
        }catch(error: any) {
           console.log(error.message)
           res.status(codeError).send({message: "Sucess"})
        } 
     })


     //Exercício 6 

     const getUsersPurchases = async (user_id: string): Promise<any> => {

        const result = await connection.raw(`
        SELECT T.*, u.name  FROM labecommerce_purchases T
        INNER JOIN labecommerce_users u on (u.id = T.user_id) WHERE T.user_id = '${user_id}'
        `)
        return result[0]
      }
    
      app.get('/users/:user_id/purchases', async(req, res) => {
        let codeError: number = 400
        try {
            const user_id = req.params.user_id
    
            console.log(await getUsersPurchases(user_id))
    
             if(req.params.user_id === undefined){
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