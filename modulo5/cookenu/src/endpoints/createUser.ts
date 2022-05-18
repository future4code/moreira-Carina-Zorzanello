import { Request, Response } from "express";
import { connection } from "../connection";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";
import { HashManager } from "../services/HashManager";


export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
     const { email, password, name } = req.body
     
     if (!req.body.email || !req.body.password || !req.body.name) {
      throw new Error("Favor verifique os campos preenchidos!");
    }
   
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("A senha deve possuir no mínimo 6 caracteres!");
    }

    const id = generateId();
    
    const cypherPassword: string= new HashManager().createHash(password)
    
    const userData = {
      id: id,
      email: req.body.email,
      password: cypherPassword,
      name: req.body.name
    };

  
    await connection('User_Cookenu')
         .insert(userData)

    const token = generateToken({
      id: userData.id,
    });
 
    res.status(200).send({
      "Cadastro realizado com sucesso!": token,
    });
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
};
