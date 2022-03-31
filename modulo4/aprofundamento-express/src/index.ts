import express from 'express'; 
import cors from 'cors'
import { Afazeres, tarefas } from './data';
  

const app = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (request, response) => {
	console.log("Acessei o meu endpoint")

	response.send("Poing")
})




// busca todas as tarefas
app.get("/allTarefas", (request, response) => {
	
        response.send(tarefas)
})

// add nova tarefa
app.post("/tarefas", (req, res) => {
    let codeError: number = 400
    try {
        const usuario: number = Number(req.headers.authorization)
        const nomeDaTarefa = req.body.title

        const novaTarefa: Afazeres = {
        userId: usuario,
        id: Date.now(),
        title: nomeDaTarefa,
        completed: false
    } 
        tarefas.push(novaTarefa)
        res.send(tarefas)

        if(!novaTarefa.userId || !novaTarefa.id || !novaTarefa.title || !novaTarefa.completed){
            codeError = 422
            throw new Error("Verifique os campos preenchidos!");
        }
    } catch (error) {
        res.status(codeError).send({message: "Tarefa adicionada com sucesso!!"})
    }

})


// muda status da tarefa para feita ou pendente

app.get("/tarefas/:id", (req, res) => {

    const usuario: number = Number(req.headers.authorization)
    const id: number = Number(req.params.id)

    const tarefaFiltrada = tarefas.filter(item => {
        return item.id === id
    })

    const tarefaAtualizada: Afazeres [] = tarefaFiltrada.map(item =>{
        if(item.completed){
            return{
               
                "userId": item.userId,
                "id": item.id,
                "title": item.title,
                "completed": false,
   
            } 
        }else{
            return {
               
                "userId": item.userId,
                "id": item.id,
                "title": item.title,
                "completed": true,
   
            } 
        }
    })
    res.send(tarefaAtualizada)
    

})


// deleta uma tarefa através do seu id

app.delete("/tarefas/:tarefasId", (req, res) => {
    const tarefasId: number = Number(req.params.tarefasId);

    const tarefaAtualizada = tarefas.map((item) => {
        if (item.id === tarefasId) {
            return []
        } else {
            return item
        }
    });

    res.send(tarefaAtualizada);
})


//traz os detalhes de 1 tarefa em especifico através do seu id

app.get("/tarefas/:id", (req, res) => {

    const usuario: number = Number(req.headers.authorization)
    const id: number = Number(req.params.id)

    const tarefaFiltrada = tarefas.filter(item => {
        return item.id === id
    })

    res.send(tarefaFiltrada) 

})



app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});