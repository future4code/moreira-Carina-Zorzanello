import axios from "axios"
import { baseURL } from "./baseURL"

// Agora, para treinar um pouco da sintaxe, reescreva a função do exercício 1 utilizando *arrow function*. 

// *a.* Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function 

// Resposta: Em uma função nomeada assincrona, no lugar de cosnt usaremos "async function", e usaremos a seta =>.
// Já na Arrow funciton usaremos desta forma "const getSubscribers = async (): Promise<any[]> =>"

// b.Implemente a função solicitada, usando arrow function


const getSubscribers = async (): Promise<any> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
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