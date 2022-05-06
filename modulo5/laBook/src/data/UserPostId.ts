import Post from "../model/Post"
import { BaseDatabase } from "./BaseDataBase"

export default class UserPostId extends BaseDatabase {
    protected TABLE_NAME = "labook_posts"

    select = async (post: Post) => {
        try {
          
            await this
                .connection(this.TABLE_NAME)
                .from('labook_posts')
                .where({ id });
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }
}