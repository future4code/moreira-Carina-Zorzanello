import { BaseDatabase } from "../data/BaseDataBase";
import UserData from "../data/UserData";
import UserPost from "../data/UserPost";
import Post from "../model/Post";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData } from "../types/authData";
import { PostsInputDTO } from "../types/postsInputDTO";


export default class PostsBusiness  {

    constructor(
        private userPost:UserPost,
        private idGenerator:IdGenerator,
        private hashManager:HashManager,
        private authenticator:Authenticator
    ){}

    posts = async (input:PostsInputDTO, authorization:string | undefined) =>{
        
        const {photo, description, type, created_at, author_id} = input
      
        if (!photo || !description || !type || !created_at || !author_id) {
            throw new Error("Por favor verifique os dados preenchidos!");
          }

          const token: string = authorization as string

          const tokenData: authenticationData = this.authenticator.getTokenData(token)
    
          const id: string = this.idGenerator.generateId()

          const post = new Post(
            id,
            photo,
            description,
            type,
            created_at,
            author_id
        )
          await this.userPost.insert(post)
    
       } 
    }

