import { Request, Response } from "express";
import GetPostBusiness from "../business/GetPostBusiness";
import PostsBusiness from "../business/PostsBusiness";
import { PostIdInputDTO } from "../types/postIdInputDTO";
import { PostsInputDTO } from "../types/postsInputDTO";

export default class GetPostController{
    constructor(
        private getPostBusiness: GetPostBusiness
    ){}

    getPost = async(req: Request, res: Response) =>{
       
        const { id } = req.params
        const input: PostIdInputDTO ={
            photo,
            description,
            type,
            created_at,
            author_id
        }
        try {
            const token = await this.getPostBusiness.getPost(input, req.headers.authorization)
            res.status(201).send({message: "Post encontrado", token})
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro ao procurar por post")
        }
    }
}