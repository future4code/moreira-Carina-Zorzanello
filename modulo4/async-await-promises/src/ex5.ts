import axios from "axios"
import { baseURL } from "./baseURL"


// Agora, implemente uma função que receba um array de usuários e uma mensagem e envie essa mensagem como notificação para todos
//  os usuários. A princípio, não utilize o Promise.all

const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
    try {
          for (const user of users) {
          await axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message: "Confira as notícias"
          });
        }
  
        console.log("All notifications sent");
      } catch {
          console.log("Error");
      }
  };

  
const main = async (): Promise<void> => {
    try {
        await createNews(news)
        const subscribers = await getAllSubscribers()
        const ids = getSubscribersIds(subscribers)
        await notifyAllSubscribers(ids)
    } catch (error: any) {
        console.log(error.response?.data || error.message)
    }
}

main()
