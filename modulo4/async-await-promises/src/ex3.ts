import axios from "axios"
import { baseURL } from "./baseURL"

// *a.* Se apenas trocarmos o retorno da função para: `Promise<user[]>` , teremos algum erro de tipagem?

//Resposta: não da erro pois a Promise está esperando receber um array do tipo user, e nosso typ é um user.

// type user = {
// 	id: string;
// 	name: string;
// 	email: string;
// }

// const getSubscribers = async (): Promise<user[]> => {
//     const response = await axios.get(`${baseURL}/subscribers`);
//     return response.data;
//   };
  
//   const main = async (): Promise<void> => {
//     try {
//         const subscribers = await getSubscribers()
//         console.log(subscribers)
//     } catch (error: any) {
//         console.log(error.response?.data || error.message)
//     } 

// }

// main()

// b. É boa prática fazermos um mapeamento do resultado de uma Promise, caso seja indicado que ela retorne um `Promise<any>`. 
//Explique com as suas palavras o porquê de fazermos isso

// Resposta: Sim é indicado fazer pois Promisse do tipo Any, retorna qualquer informação, então se eu quero informações específicas devo fazer o mapeamento.


// c. Reimplemente a função, corretamente.

const getSubscribers = async (): Promise<any> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };

  const main = async (): Promise<void> => {
    try {
        const subscribers = await getSubscribers()
        console.log(subscribers)
    } catch (error: any) {
        console.log(error.response?.data || error.message)
    } 

}

main()
