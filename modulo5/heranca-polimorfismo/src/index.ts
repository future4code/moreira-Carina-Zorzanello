import express, {Express} from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import {knex} from "knex"
import { Client, Place } from './Types';

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

//Herança
//Exercício 1

class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}
    public interoduceYourself(): string {
        return  `Olá, sou ${this.name}. Bom dia!`;
     }

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}

}

// const users = new User("1", "carina@gmail.com", "carina", "123456")
// console.log(users.getEmail())


// Exercício 2

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string,
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
     
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
     
    
  }

//   const customer = new Customer("1", "carina@gmail.com", "Carina", "123456", "Mastercad")
//   customer.purchaseTotal = 5000;
//   console.log(customer.getId(), customer.getEmail(),  customer.getName(), customer.getCreditCard(), customer.purchaseTotal,  customer.interoduceYourself())




  // Exercício 3 

//   Agora, imprima **todas as informações possíveis** da instância que você criou:
//    o id, o nome, o email, o valor total de compra (`purchaseTotal`) e o cartão de crédito (`creditCard`). 
//    Perceba que as propriedades públicas da classe pai (`User`) foram "herdadas" pela classe filha (`Customer`).

// const customer = new Customer("1", "carina@gmail.com", "Carina", "123456", "Mastercad")
// customer.purchaseTotal = 5000;
// console.log(customer.getId(), customer.getEmail(),  customer.getName(), customer.getCreditCard(), customer.purchaseTotal)


//Polimorfismo
//Exercício 1



const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }

  console.log(client, client.calculateBill())

  
//Exercício 3 

class Residence extends Place {
    constructor(
      private dwellersQuantity: number,
  
      cep: string
    ) {
      super(cep);
    }
    
    public getDwellersQuantity(): number {
      return this.dwellersQuantity
    }
  }

  class Commerce extends Place {
    constructor(
      private floorsQuantity: number,
  
      cep: string
    ) {
      super(cep);
    }
  
    public getFloorsQuantity(): number {
      return this.floorsQuantity;
    }
  }

  class Industry extends Place {
    constructor(
      private machinesQuantity: number,

      cep: string
    ) {
      super(cep);
    }
  
    public getMachinesQuantity(): number {
      return this.machinesQuantity;
    }
  }

  //Exercício 4

  class ResidentialClient extends Residence implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cpf: string,
      residentsQuantity: number,
      cep: string
    ) {
      super(residentsQuantity, cep);
    }
  
    public getCpf(): string {
      return this.cpf;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.75;
    }
  }

  //Exercício 5

  class CommercialClient extends Commerce implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cnpj: string,
      floorsQuantity: number,
      cep: string
    ) {
      super(floorsQuantity, cep);
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.53;
    }
  
    public getCnpj(): string {
      return this.cnpj;
    }
  }

  //Exercício 6

  class IndustrialClinet extends Industry implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private insdustryNumber: string, 
      machinesQuantity: number,
      cep: string
    ) {
      super(machinesQuantity, cep);
    }
  
    public getIndustryNumber(): string {
      return this.insdustryNumber;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.45 + this.getMachinesQuantity() * 100;
    }
  }



app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});

