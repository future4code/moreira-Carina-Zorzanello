export enum USER_ROLES{
   ADMIN= "ADMIN",
   NORMAL="NORMAL"
}

export interface AuthenticationData  {
   id: string;
   role:USER_ROLES
 }
 export type user = {
    id: string
    email: string
    password: string
    name: string
    nickname: string
    role:USER_ROLES
 }