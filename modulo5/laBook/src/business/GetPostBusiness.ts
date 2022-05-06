import { BaseDatabase } from "../data/BaseDataBase";
import UserData from "../data/UserData";
import UserPost from "../data/UserPost";
import UserPostId from "../data/UserPostId";
import Post from "../model/Post";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData } from "../types/authData";
import { PostIdInputDTO } from "../types/postIdInputDTO";
import { PostsInputDTO } from "../types/postsInputDTO";


export default class GetPostBusiness  {

    constructor(
        private userPost:UserPost,
        private userPostId: UserPostId,
        private idGenerator:IdGenerator,
        private hashManager:HashManager,
        private authenticator:Authenticator
    ){}

    getPost = async (input:PostIdInputDTO, authorization:string | undefined) =>{
        

          const token: string = authorization as string

          const tokenData: authenticationData = this.authenticator.getTokenData(token)
    
          const id: string = this.idGenerator.generateId()

          const post: Post = {
            id: queryResult[0].id,
            photo: queryResult[0].photo,
            description: queryResult[0].description,
            type: queryResult[0].type,
            createdAt: queryResult[0].created_at,
            authorId: queryResult[0].author_id,
         }
          await this.userPostId.insert(post)
    
       } 
    }

