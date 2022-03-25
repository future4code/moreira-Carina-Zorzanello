
//a) Copie o código acima para um arquivo .ts depois:

//- crie um *type* para representar um post;
//- Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts.

// type Post = {
//     autor: string,
//     texto: string,
// }


// const posts: Post = {

//           autor: "Alvo Dumbledore",
//           texto: "Não vale a pena viver sonhando e se esquecer de viver"
//         }


// const posts1: Post = {

//           autor: "Severo Snape",
//           texto: "Menos 10 pontos para Grifinória!"
//         }

// const posts2: Post ={

//           autor: "Hermione Granger",
//           texto: "É levi-ô-sa, não levio-sá!"
//         }

// const posts3: Post = {

//           autor: "Dobby",
//           texto: "Dobby é um elfo livre!"
//         }
        
// const posts4: Post = {

//           autor: "Lord Voldemort",
//           texto: "Avada Kedavra!"
//         }
      
// console.log(posts)


// function buscarPostsPorAutor(posts: string, autorInformado: string) {
//     return posts.filter(
//       (post: string) => {
//         return post.autor === autorInformado
//       }
//     )
//   }