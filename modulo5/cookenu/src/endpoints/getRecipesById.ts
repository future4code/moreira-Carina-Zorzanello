import { connection } from "../connection";

export const getRecipesById = async(id: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from('Recipe')
      .where({ id });
 
    return result[0];
   }