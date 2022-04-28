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

// Exercício 1

// a) *Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*

//Serve para definir o formato, ele sempre deve ser declarado com a função.
// chamamos o constructor instanciando a classe.

// b) *Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe 
//(dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor da classe User"` 
//foi impressa no terminal?*

//Resposta: A mensagem `"Chamando o construtor da classe User"` foi impressa 1 vez.

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    setTransaction(value: Transaction){
        this.transactions.push(value)
    }
    getCpf(){
        return this.cpf
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getBalance(){
        return this.balance
    }
    getTransactions(){
        return this.transactions
    }
  
  }

  const account = new UserAccount("025 582 900 02","carina",33)

//   console.log(account)

// c) *Como conseguimos ter acesso às propriedades privadas de uma classe?*

// usando a keyword this.

// Exercício 2



class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
    getDate(){
        return this.date
    }
    getValue(){
        return this.value
    }
    getDescription(){
        return this.description
    }
  }

  const transaction = new Transaction("2022-04-18",2500, "Conta-corrente")
  account.setTransaction(transaction)

  console.log(account)

  //Exercício 3

  class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
  }

  const accounts: UserAccount[]= [];
  accounts.push(account)
  const bank = new Bank(accounts)

  console.log(bank)












app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});
