import express, {Request, Response} from 'express'; 
import cors from 'cors';
import {user, users} from './data'

  

const app = express();

app.use(express.json());
app.use(cors());


app.get('/test/hello', (req, res) => {
    res.send(`Olá!`)
    })

    app.post('/users', (req: Request, res: Response)=>{
        let errorCode: number = 400
        try { 
            const {id, name, cpf, birth, balance, transaction} = req.body
            const userBirth =new Date(req.body.birth).getFullYear()
            const age = new Date().getFullYear() - userBirth
            console.log(age < 18)
            if(age < 18){
                errorCode = 422
                throw new Error("Minors cannot open a bank account");
            }
            if(!id || !name || !cpf || !birth || !balance || !transaction ){
                errorCode = 422
                throw new Error("Check the fields");
            }
            const userNew: user = {
                id,
                name,
                cpf,
                birth,
                balance,
                transaction
            }
            console.log(userNew)
            users.push(userNew)
        } catch (error:any) {
            res.status(errorCode).send({message: error.message})
        }
    })
    

    app.get('/users', (req: Request, res: Response)=>{
        let codeError: number = 400
        try {
            if(users.length <=0){ 
                codeError = 404
                throw new Error("User not found");
            }
            res.status(200).send(users)
        } catch(error) {
            res.status(codeError).send({message: error})
        }
    })




app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});