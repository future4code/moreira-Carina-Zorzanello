import axios from "axios"
import { baseURL } from "./baseURL"



// *a.* Qual é o tipo dessa função? Por quê?

// Resposta: O tipo dela será async e o endpoint é o put.

// b. Implemente a função solicitada

// type news = {
//     title: string,
//     content: string,
//     date: number
// }


async function createNews(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.put(`${baseURL}/news`, {
      title: "Alo",
      content: "Homem raivoso morde cachorro tranquilo", 
      date: 2022-4-11
    });
  }

// const main = async (): Promise<void> => {
//     try {
//         await createNews(news) 
//     } catch (error: any) {
//         console.log(error.response?.data || error.message)
//     }
// }

// main()