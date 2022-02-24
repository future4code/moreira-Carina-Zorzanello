import React from "react";
import usePostsList from "../../hooks/usePostsList";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import {BASE_URL} from "../../constants/urls";
import CardPost from "../../components/CardPosts/CardPost";

const PostPage = () => {
    // useUnprotectedPage()

    const posts = usePostsList([], `${BASE_URL}/posts`)

    const listPosts = posts.map((posts)=>{
        return (
            <CardPost 
                key={posts.posts_id}
                id={posts.id}
                body={posts.body}
                title={posts.title}
                commentCount={posts.commentCount}
                // createdAt={posts.createdAt}
                userVote={posts.userVote}
                voteSum={posts.voteSum}
                // onClick={() => onClickPost(posts.posts_id)}

            /> 
        )
    })

    return (
        <div>
            <h1>PostPage</h1>
            {listPosts}
        </div>
    )
}

export default PostPage