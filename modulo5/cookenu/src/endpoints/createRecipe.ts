import { Request, Response } from "express";
import { connection } from "../connection";
import { generateId } from "../services/generateId";
import { generateToken, getData } from "../services/generateToken";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
     const { title, description } = req.body
     
     if (!req.body.title || !req.body.description) {
      throw new Error("Favor verifique os campos preenchidos!");
    }

    const token = req.headers.authorization as string;

    const authenticationData = getData(token);

    const id = generateId();
    
    const userData = {
      id: id,
      title: req.body.title,
      description: req.body.description,
      createdAt: new Date()
    };

  
    await connection('Recipe')
         .insert(userData)

    res.status(200).send(
      "Receita criada com Sucesso!"
    );
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
};