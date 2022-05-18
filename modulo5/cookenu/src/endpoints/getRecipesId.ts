import { Request, Response } from "express";
import {getData} from '../services/generateToken'
import { getRecipesById } from "./getRecipesById";

export default async function getRecipesId(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const token = req.headers.authorization as string;
  
     
      const authenticationData = getData(token);
  
      const user = await getRecipesById(req.params.id);
  
      res.status(200).send({
        id: user.id,
        title: user.title,
        description: user.description,
        createdAt: user.createdAt
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  };