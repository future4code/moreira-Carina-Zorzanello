import { connection } from "../connection";

export const getUserById = async(id: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from('User_Cookenu')
      .where({ id });
 
    return result[0];
   }