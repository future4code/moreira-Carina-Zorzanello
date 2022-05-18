import { Request, Response } from "express";
import { getUserById } from "./getUserById";
import {getData} from '../services/generateToken'

export default async function profileByUserId(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const token = req.headers.authorization as string;
  
     
      const authenticationData = getData(token);
  
      const user = await getUserById(req.params.id);
  
      res.status(200).send({
        id: user.id,
        email: user.email,
        name: user.name
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  };