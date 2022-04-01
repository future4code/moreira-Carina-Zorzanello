// export enum UserType {
//     ADMIN = "ADMIN",
//     NORMAL = "NORMAL"
// }

export type checkBalance={
    balance: number,
    transfer: number,
    withdraw: number,
    deposit: number
}

export  type user={
    id: number,
    name: string,
    cpf: number,
    birth: Date,
    balance: number,
    transaction: number[]
}
   export let users: user[] = [
        {
            id: 1,
            name: "Alice",
            cpf: 66666666666,
            birth: new Date('1989-04-18'),
            balance: 0,
            transaction: [2000]
        },
        {
            id: 2,
            name: "Maria",
            cpf: 11111111111,
            birth: new Date('1988-04-18'),
            balance: 0,
            transaction: [300]
        },
        {
            id: 3,
            name: "Joao",
            cpf: 22222222222,
            birth: new Date('1990-04-18'),
            balance: 0,
            transaction: [1000]
        },
        {
            id: 4,
            name: "Isabela",
            cpf: 33333333333,
            birth: new Date('1987-04-18'),
            balance: 0,
            transaction: [5000]
        },
        {
            id: 5,
            name: "Pedro",
            cpf: 44444444444,
            birth: new Date('1984-04-18'),
            balance: 0,
            transaction: [300]
        },
        {
            id:6,
            name: "Caroline",
            cpf: 55555555555,
            birth: new Date('1985-04-18'),
            balance: 0,
            transaction: [2500]
        }
    ]

    export  type balance={
        userId: number,
        saldo: number,
        date: number,
        description: string,
      
    }
       export let balances: balance[] = [
            {
                userId: 1,
                saldo: 2000,
                date: 18/2/2022,
                description: "Saldo total atual",
            },
            {
                userId: 2,
                saldo: 3000,
                date: 18/10/2022,
                description: "Saldo total atual",
            },
            {
                userId: 3,
                saldo: 3500,
                date: 18/1/2022,
                description: "Saldo total atual",
            },
            {
                userId: 4,
                saldo: 5000,
                date: 18/5/2022,
                description: "Saldo total atual",
            },
            {
                userId: 5,
                saldo: 10000,
                date: 18/4/2022,
                description: "Saldo total atual",
            },
            {
                userId: 6,
                saldo: 100,
                date: 18/8/2022,
                description: "Saldo total atual",
            }
       ]