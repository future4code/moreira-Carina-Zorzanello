import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"


// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//     try {
//        const users = await selectAllUsers()
 
//        if(!users.length){
//           res.statusCode = 404
//           throw new Error("No recipes found")
//        }
 
//        res.status(200).send(users)
       
//     } catch (error: any) {
//        console.log(error)
//        res.send(error.message || error.sqlMessage)
//     }
//  }

//  export default async function selectAllUsers():Promise<any> {
//    const result = await connection.raw(`
//       SELECT id, name, email, type
//       FROM aula48_exercicio;
//    `)

//    return result[0]
// }


export async function getAllUsers(
   req: Request,
   res: Response
): Promise<void> {
   let errorCode=400
   try {
      const table='aula48_exercicio'
      const name=req.query.name as string
      let sort = req.query.sort as string
      let order = req.query.order as string
      let page = Number(req.query.page)

      if(page<1 || isNaN(page)){
         page=1
      }
       let size = 2
       let offset = size*(page-1)
       
      if(!name){
         errorCode=422
         throw new Error("Informe o nome de usuário");
      }
      if(sort!=='name' && sort !== "email"){
         sort="name"
      }
      if(order.toUpperCase()!== "ASC" && order.toUpperCase() !== "DESC"){
         order= "DESC"
      }
      const result = await connection(table)
      .where('name','LIKE',`%${name}%` )
      .orderBy(sort,order)
      .limit(size)
      .offset(offset)

      const user = result.map(toUser)

 
   
      if(user.length===0){
         errorCode =200
         throw new Error("Não foi encontrada nenhum usuário com este nome");
         
      }
      res.status(200).send(user)
      
 
    } catch (error:any) {
       res.status(errorCode).send(error.message)
    }   
}
const toUser = (input: any): user => {
   return {
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type
   }
}
