import { Request, Response } from "express";
import PostsBusiness from "../business/PostsBusiness";
import { PostsInputDTO } from "../types/postsInputDTO";

export default class PostsController{
    constructor(
        private postBusiness: PostsBusiness
    ){}

    posts = async(req: Request, res: Response) =>{
        const {photo, description, type, created_at, author_id} = req.body;

        const input: PostsInputDTO ={
            photo,
            description,
            type,
            created_at,
            author_id
        }
        try {
            const token = await this.postBusiness.posts(input, req.headers.authorization)
            res.status(201).send({message: "Post criado com sucesso", token})
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro ao criar o post")
        }
    }
}