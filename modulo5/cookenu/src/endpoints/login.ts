
import { Request, Response } from "express";
import { generateToken } from "../services/generateToken";
import { HashManager } from "../services/HashManager";
import { getUserByEmail } from "./getUserByEmail";


export default async function login(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
     
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Email incorreto!");
          }
         
          if (!req.body.password) {
            throw new Error("Senha incorreta!");
          }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
  
      const user = await getUserByEmail(userData.email);

      const passwordIsCorrect:boolean = new HashManager().compareHash(userData.password, user.password) 
  
      if (!passwordIsCorrect) {
        throw new Error("Senha inválida!");
      }
  
      
      const token = generateToken({
        id: user.id,
      });
  
      res.status(200).send({
        "Login realizado com sucesso!": token,
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  };