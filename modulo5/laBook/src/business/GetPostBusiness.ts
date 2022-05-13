import UserPostId from "../data/UserPostId";
import { Authenticator } from "../services/Authenticator";
import { authenticationData } from "../types/authData";


export default class GetPostBusiness  {

    constructor(
        private userPostId: UserPostId,
        private authenticator:Authenticator
    ){}

    getPost = async (id:string, authorization:string | undefined) =>{
        

          const token: string = authorization as string

          const tokenData: authenticationData = this.authenticator.getTokenData(token)
    
          const post = await this.userPostId.select(id);
console.log(post)
         return post
         
       } 
    }

