export type Afazeres = {
   userId: number,
   id: number,
   title: string,
   completed: boolean
}

export const tarefas: Afazeres[] =
 [
     { 
        "userId": 1,
        "id": 1,
        "title":"Lavar a louça",
        "completed": false 
     
    },
    { 
      "userId": 1,
      "id": 2,
      "title":"Dobrar a roupa",
      "completed": true 
   
  },
  { 
   "userId": 1,
   "id": 3,
   "title":"Comprar pão",
   "completed": false 

},
{ 
   "userId": 1,
   "id": 4,
   "title":"Cortar a grama",
   "completed": true 

},

]