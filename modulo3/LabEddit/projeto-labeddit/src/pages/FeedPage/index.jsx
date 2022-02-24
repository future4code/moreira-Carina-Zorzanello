import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import CardPost from "../../components/CardPosts/CardPost";
import usePostsList from "../../hooks/usePostsList";
import {BASE_URL} from "../../constants/urls";
import { goToPost } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ScreenContainer, RecipeContainer} from "./styled";


const FeedPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const posts = usePostsList([], `${BASE_URL}/posts`)
    

    const listPosts = posts.map((posts)=>{
        return (
            <CardPost 
                key={posts.posts_id}
                body={posts.body}
                title={posts.title}
                commentCount={posts.commentCount}
                // createdAt={posts.createdAt}
                userVote={posts.userVote}
                voteSum={posts.voteSum}

            /> 
        )
    })
  

    return (
        <div>
            <h1>FeedPage</h1>
           

            <Button onClick={() => goToPost(navigate)} color="primary">Posts</Button>
           
            {listPosts}
            
        </div>
    )
}

export default FeedPage