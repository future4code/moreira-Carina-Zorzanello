import { Request, Response } from "express";
import { connection } from "../connection";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";
import { HashManager } from "../services/hashManager";


export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
     const { email, password, name, nickname } = req.body
     
     if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }
   
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const id = generateId();
    
    const cypherPassword: string= new HashManager().createHash(password)
    
    const userData = {
      id: id,
      email: req.body.email,
      password: req.body.cypherPassword,
    };

  
    await connection('User')
         .insert(userData)

    const token = generateToken({
      id: userData.id,
    });
 
    res.status(200).send({
      token,
    });
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
};
