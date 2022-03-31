import express, {Request, Response} from 'express'; 
import cors from 'cors';
import { user, users, UserType } from './data';

  

const app = express();

app.use(express.json());
app.use(cors());

// app.get('/test/hello', (req, res) => {
//     res.send(`Olá!`)
//     })


    // Exercício 1
    //a) Deve-se usar o GET 
    //b) Indico a entidade USERS.

// app.get('/users', (req: Request, res: Response)=>{
//     let codeError: number = 400
//     try {
//         if(users.length <=0){  //caso não exista users de forma mocada usaria a validação if(!users)
//             codeError = 404
//             throw new Error("User not found");
//         }
//         res.status(200).send(users)
//     } catch(error) {
//         res.status(codeError).send({message: error})
//     }
// })


//Exercicio 2

// a) Passei os parametros como typo UserType que foi meu enum
// b) neste caso como está escrito em letras maiúsculas utilizando o toUpperCase

// app.get('/users/userType/:userType', (req: Request, res: Response)=>{
//     let codeError: number = 400
//     try {
//         const userType: string = (req.params.userType.toUpperCase()) 
//         if(!userType){
//             codeError = 404
//             throw new Error("User not found");
//         }
//         const user = users.filter((user)=>{
//             return user.type === userType
//         })
//         res.status(200).send(user)
//     } catch (error) {
//         res.status(codeError).send({message: error})
//     }
// })


// Exercicio 3
// a) params tipo query usando name
//b)
app.get('/users', (req: Request, res: Response)=>{
    let errorCode: number = 400
    try {
        const name: string = req.query.name as string
        const user: user | undefined = users.find((user)=>{ 
            return user.name === name 
        });

        if(!user){
            errorCode = 404
            throw new Error("User not found");
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(errorCode).send({message: error})
    }
})

// Exercicio 4
//a)Put é utilizado para alterar geralmente, não mudaria nada mas não é uma boa prática
//b) Não o apropriado é o post conforme a documentação
app.post('/users', (req: Request, res: Response)=>{
    let errorCode: number = 400
    try {
        const  {id, name, email, type, age} = req.body
        if(!id || !name || !email || !type || !age){
            errorCode = 422
            throw new Error("Missing data, please check");
        }
        const userNew: user = {
            id,
            name,
            email,
            type,
            age
        }
        console.log(userNew)
        users.push(userNew)
    } catch (error) {
        res.status(errorCode).send({message: "User created successfully"})
    }
})




app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});