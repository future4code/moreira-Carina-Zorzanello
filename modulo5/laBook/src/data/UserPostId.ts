import { BaseDatabase } from "./BaseDataBase"

export default class UserPostId extends BaseDatabase {
    protected TABLE_NAME = "labook_posts"


select = async (id: string) => {
    try {
        const queryResult = await this
            .connection(this.TABLE_NAME)
            .select("*")
            .from('labook_posts')
            .where({ id })

        return queryResult[0]
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error("Erro do banco !")
        }
    }
}

}