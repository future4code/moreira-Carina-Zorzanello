import axios from "axios"
import { baseURL } from "./baseURL"

// a. O que o `Promise.all` faz?

// b. Quais as vantagens de se utilizar o `Promise.all` no caso de se enviar as notificações para todos os usuários?

// c. Reimplemente a função utilizando `Promise.all`

const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`${baseUrl}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };