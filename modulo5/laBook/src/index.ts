import LoginBusiness from "./business/LoginBusiness";
import UserBusiness from "./business/UserBusiness";
import { app } from "./controller/app";
import LoginController from "./controller/LoginController";
import UserController from "./controller/UserController";
import UserData from "./data/UserData";
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