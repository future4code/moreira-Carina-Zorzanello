import express from 'express'; 
import cors from 'cors';
import { Itens, produtos } from './data';
  

const app = express();

app.use(express.json());
app.use(cors());

app.get('/test/hello', (req, res) => {
    res.send(`Olá, mundo!`)
    })

// create produto
    app.post("/produtos", (req, res) => {
        const usuario: number = Number(req.headers.authorization)
        const nomeDoProduto = req.body.name
        const price: number = Number(req.body.price)
    
        const novoProduto: Itens = {
            id: usuario,
            name: nomeDoProduto,
            price: price
        }
    
        produtos.push(novoProduto)
    
        res.send(produtos)
    
    
    })

    // retorna todos os produtos
    app.get("/produtos", (request, response) => {
	
        response.send(produtos)
})


//edita preço 
app.get("/produtos/:id", (req, res) => {

    const usuario: number = Number(req.headers.authorization)
    const id: number = Number(req.params.id)

    const produtoFiltrado = produtos.filter(item => {
        return item.id === id
    })

    const produtoAtualizado: Itens [] = produtoFiltrado.map(item =>{
        if(item.price){
            return{
               
                "id": item.id,
                "name": item.name,
                "price": item.price,
   
            } 
        }else{
            return {
               
                "id": item.id,
                "name": item.name,
                "price": item.price,
   
            } 
        }
    })
    res.send(produtoAtualizado)
    

})


// deleta produto
app.delete("/produtos/:produtosId", (req, res) => {
    const produtosId: number = Number(req.params.produtosId);

    const produtoAtualizado = produtos.map((item) => {
        if (item.id === produtosId) {
            return []
        } else {
            return item
        }
    });

    res.send(produtoAtualizado);
})
    
app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});