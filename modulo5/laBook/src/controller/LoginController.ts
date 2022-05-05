import { Request, Response } from "express";
import LoginBusiness from "../business/LoginBusiness";
import { LoginInputDTO } from "../types/loginInputDTO";

export default class LoginController{
    constructor(
        private loginBusiness: LoginBusiness

    ){}

    login = async(req: Request, res: Response) =>{
        const {email, password} = req.body;

        const input: LoginInputDTO ={
            
            email,
            password
        }
        try {
            const token = await this.loginBusiness.login(input)
            res.status(201).send({message: "Usuário logado com sucesso", token})
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no login")
        }
    }
}