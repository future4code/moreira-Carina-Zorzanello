import axios from "axios"
import { baseURL } from "./baseURL"


// *a.* Qual endpoint você deve utilizar para isso?

// Resposta: Utilizamos o endpoint GET.

// b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?

// Declaramos ela como async.

// c. Implemente uma função nomeada que faça o que foi pedido.

    async function getSubscribers(): Promise<any[]> {
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


