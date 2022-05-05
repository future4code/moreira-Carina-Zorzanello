enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }

export type PostsInputDTO = {
    photo: string
    description: string
    type: POST_TYPES,
    created_at: Date,
    author_id: string
}