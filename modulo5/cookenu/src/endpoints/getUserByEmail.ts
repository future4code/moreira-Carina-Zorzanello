import { connection } from "../connection";


export const getUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from('User_Cookenu')
      .where({ email });
 
    return result[0];
   }
 
