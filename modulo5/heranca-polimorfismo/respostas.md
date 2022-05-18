Herança
Exercício1 

1 - a) Seria possível imprimir a senha (password) atrelada a essa instância?

Nao será possível acessar neste momento pois a senha é privada.

b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?

Foi impressa uma vez.

Exercício 2

a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?* 
 Foi impressa uma vez.

b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*

Foi impressao 2 vezes, porque toda vez que chamo o Customer, como ele é filho de User, ele traz suas informações de filho e mais da mae(User) como herança.


Exercicio 3

Agora, imprima **todas as informações possíveis** da instância que você criou: o id, o nome, o email, o valor total de compra (`purchaseTotal`) e o cartão de crédito (`creditCard`). Perceba que as propriedades públicas da classe pai (`User`) foram "herdadas" pela classe filha (`Customer`).

a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?* *Por quê?*

Sim, pois sendo filha ela herdou as informações que existem na classe mãe.

Exercício


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
        return "Olá, bom dia!"
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

const users = new User("1", "carina@gmail.com", "carina", "123456")
console.log(users.getEmail())


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

  const customer = new Customer("1", "carina@gmail.com", "Carina", "123456", "Mastercad")
  customer.purchaseTotal = 5000;
  console.log(customer.getId(), customer.getEmail(),  customer.getName(), customer.getCreditCard(), customer.purchaseTotal,  customer.interoduceYourself())


Polimorfismo

Exercicio 1

a) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?

Primeiro chamei somente client então imprimiu apenas o nome e as demais informações.
Depois chamei a função calculateBill e então imprimiu o número 2

Exercício 2

a) *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?*

const place = new Place("93800-000")

O erro que diz é: Não é possível criar uma instância a uma classe abstrata.

b) *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*

Ela teria que ser reatribuida dentro de uma outra classe e então instanciada e chamada.


Exercício 5

a) *Quais as semelhanças dessa classe com a `ResidentialClient`?*

Tem praticamente as mesma informações públicas.

b) *Quais as diferenças dessa classe com a `ResidentialClient`?*

O valor a ser calculado muda e também nesta estamos passando informações de empresa CNPJ

Exercício 6

a) *De* q*ual classe a `IndustrialClient` deve ser filha? Por quê?*

De Industry, porque está utilizando valores da classe industry

b) *Que interface a `IndustrialClient` implementa? Por quê?*
Implementa a interface da indústria os dados que representam uma indústria.

c) *Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?*


