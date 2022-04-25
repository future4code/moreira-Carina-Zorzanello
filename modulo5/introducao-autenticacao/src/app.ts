import express from 'express'
import cors from 'cors'
import { generateId } from './services/gerateId'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, ()=>{
    console.log('Servidor rodando na porta 3003')
    console.log(generateId());
})

export default app