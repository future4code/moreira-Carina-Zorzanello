type Num0rStg2 = number|string

type Person = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: Num0rStg2
}

export const users: Person={
	id: 1,
	name: "Nina",
	phone: 999999999,
    email: "nina.zorzanello@gmail.com",
    website: "www.ninazorzanello123.com.br"
}



export type Usuarios = {
    nome: string, 
    age: number,
    email: string,
    userId: number,
    id: number, 
    title: string,
    body: string,
}

export const posts: Usuarios[] =
 [
     { 
        nome: "Marcos", 
        age: 25, 
        email: "marcos@gmail.com",
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
{
        nome: "Maria", 
        age: 15,  
        email: "maria@gmail.com",
        "userId": 2,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis vol uptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
},
{ 
        nome: "Salete", 
        age: 22, 
        email: "salete@gmail.com",
        "userId": 3,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
},
{ 
        nome: "Joao", 
        age: 28, 
        email: "joao@gmail.com",
        "userId": 4,
        "id": 4,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
},
{ 
        nome: "Josue", 
        age: 55, 
        email: "josue@gmail.com",
        "userId": 5,
        "id": 5,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
},
{ 
        nome: "Natalia", 
        age: 47, 
        email: "natalia@gmail.com",
        "userId": 6,
        "id": 6,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
},
{ 
        nome: "Paola", 
        age: 35, 
        email: "paola@gmail.com",
        "userId": 7,
        "id": 7,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
 }
]

// coloquei junto com cria????o de usu??rio pois o c??digo fica mais limpo e n??o achei necess??rio criar outro tipo, apenas acrescentei informa????es,
// pois caso preciso seja pegar apenas uma ??nica informa????o, crio isso em endpoints separados.

