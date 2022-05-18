import app from "./app"
import createRecipe from "./endpoints/createRecipe";
import createUser from "./endpoints/createUser";
import getRecipesId from "./endpoints/getRecipesId";
import login from "./endpoints/login";
import profile from "./endpoints/profile";
import profileByUserId from "./endpoints/profileByUserId";


app.post('/user/signup', createUser);
app.post('/user/login', login);
app.get('/user/profile', profile);
app.get('/user/:id', profileByUserId);
app.post('/recipe', createRecipe);
app.get('/recipe/:id', getRecipesId);




