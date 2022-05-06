enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }


export default class Post{
    static id: string;
    constructor(
        private id:string,
        private photo:string,
        private description:string,
        private type: POST_TYPES,
        private author_id: string,
    ){}
}