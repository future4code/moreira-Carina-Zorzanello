import { Request, Response } from "express";
import { getUserById } from "./getUserById";
import {getData} from '../services/generateToken'
import { AuthenticationData, USER_ROLES } from "../types";

export default async function profile(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const token = req.headers.authorization as string;
  
     
      const authenticationData = getData(token);

      if (authenticationData.role !== USER_ROLES.NORMAL) {
        throw new Error("Only a normal user can access this funcionality");
      }
  
      const user = await getUserById(authenticationData.id);
  
      res.status(200).send({
        id: user.id,
        email: user.email,
        role: authenticationData.role,
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  };

