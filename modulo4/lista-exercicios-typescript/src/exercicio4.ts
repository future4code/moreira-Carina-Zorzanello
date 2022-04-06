//O seguinte array traz as pessoas colaboradoras de uma empresa, com seus salários,
// setores e se trabalham presencialmente ou por home office:


enum SETORES {
	MARKETING="marketing",
	VENDAS="vendas",
	FINANCEIRO="financeiro",
}

type Colaborador = {
    nome: string, 
    salario: number,
    setor: string,
    presencial: boolean,
}

const funcionarios: Colaborador[] = [{ 
        nome: "Marcos", 
        salario: 2500, 
        setor: SETORES.MARKETING, 
        presencial: true 
    },
	{
         nome: "Maria", 
         salario: 1500, 
         setor: SETORES.VENDAS, 
         presencial: false,
    },
	{ 
        nome: "Salete", 
        salario: 2200, 
        setor: SETORES.FINANCEIRO, 
        presencial: true,
    },
	{ 
        nome: "Joao", 
        salario: 2800, 
        setor: SETORES.MARKETING, 
        presencial: false,
    },
	{ 
        nome: "Josue", 
        salario: 5500, 
        setor: SETORES.FINANCEIRO, 
        presencial: true,
    },
	{ 
        nome: "Natalia", 
        salario: 4700, 
        setor: SETORES.VENDAS, 
        presencial: true,
    },
	{ 
        nome: "Paola", 
        salario: 3500, 
        setor: SETORES.MARKETING, 
        presencial: true,
     }]

     function buscarPorProfissao(funcionarios: Colaborador[]): Colaborador[] {
        return funcionarios.filter((item)=> {
            return item.setor === SETORES.MARKETING && 
                   item.presencial === true
        })
    }

    console.log(buscarPorProfissao(funcionarios))