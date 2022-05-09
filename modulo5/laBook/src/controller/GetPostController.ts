import { Request, Response } from "express";
import GetPostBusiness from "../business/GetPostBusiness";


export default class GetPostController{
    constructor(
        private getPostBusiness: GetPostBusiness
    ){}

    getPost = async(req: Request, res: Response) =>{
        const id = req.params.id;

       
        try {
            const post = await this.getPostBusiness.getPost(id, req.headers.authorization)
            console.log(post)
            res.status(201).send({post})
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro ao procurar por post")
        }
    }
}