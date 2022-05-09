import GetPostBusiness from "./business/GetPostBusiness";
import LoginBusiness from "./business/LoginBusiness";
import PostsBusiness from "./business/PostsBusiness";
import UserBusiness from "./business/UserBusiness";
import { app } from "./controller/app";
import GetPostController from "./controller/GetPostController";
import LoginController from "./controller/LoginController";
import PostsController from "./controller/PostsController";
import UserController from "./controller/UserController";
import UserData from "./data/UserData";
import UserPost from "./data/UserPost";
import UserPostId from "./data/UserPostId";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { IdGenerator } from "./services/IdGenerator";

const userBusiness = new UserBusiness(
    new UserData(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
)

const userController = new UserController(
    userBusiness
);


app.post("/user/signup", userController.signup)

const loginBusiness = new LoginBusiness(
    new UserData(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
)

const loginController = new LoginController(
    loginBusiness
);

app.post('/user/login', loginController.login);


const postsBusiness = new PostsBusiness(
    new UserPost(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
)

const postsController = new PostsController(
    postsBusiness
);

app.post('/post/create', postsController.posts);


const getPostBusiness = new GetPostBusiness(
    new UserPostId(),
    new Authenticator()
)

const getPostController = new GetPostController(
    getPostBusiness
);

app.get('/post/:id', getPostController.getPost);