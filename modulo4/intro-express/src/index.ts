import express from 'express';
import cors from 'cors';
import { posts, Usuarios} from './data';

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {          
    res.send("Hello from Express")
})


app.get("/listaDePosts", (req, res) => {

    res.status(200).send(posts);
});


app.get("/listaDePosts", (req, res) => {

    res.status(200).send(posts);
});


app.get("/:id", (req, res) => {
    const id: Number = Number(req.params.id);

    const postsEspecifico = posts.filter((post) => {
       return post.id == id
    })

    res.send(postsEspecifico);
})



app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});