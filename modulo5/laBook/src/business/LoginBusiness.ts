import UserData from "../data/UserData";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { LoginInputDTO } from "../types/loginInputDTO";


export default class UserBusiness{

    constructor(
        private userData:UserData,
        private idGenerator:IdGenerator,
        private hashManager:HashManager,
        private authenticator:Authenticator
    ){}

    login = async (input:LoginInputDTO) =>{
        const {email, password} = input
      
        if (!email || email.indexOf("@") === -1) {
            throw new Error("Email incorreto!");
          }

          if (!password) {
            throw new Error("Senha incorreta!");
          }

        const passwordIsCorrect: Promise<boolean> = new HashManager().compare(password, input.password) 

        if (!passwordIsCorrect) {
          throw new Error("Senha inválida!");
        }
  
        const user = await this.userData.findByEmail(input.email);

        const token = this.authenticator.generateToken({
          id: user.id,
        });
  
       return token
       
      }
    }
    