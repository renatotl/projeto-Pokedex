const express = require("express");
const app = express();
const path = require("path");//importando uma lib do proprio express chamada path  essencial link o frontend com o backend

app.set("view engine", "ejs"); //mortor engine da view é o ejs essencial
app.use(express.static(path.join(__dirname,"public")));//dizendo ao express a pasta que irá guardar esses arquivos   ecencial  express estatico path se junta 
// O EXPRESS eu guardei todos os arquivos em public por isso não precisou ../ na hora de linkar


//app.use faz o nosso app usar os arquivos estáticos html e JS para front esses arquivos estáticos estão em path.join para juntar __dirname nome da pasta principal(,) nome da past a que é public
//A gora nosso servidor sabe onta está os arquivos estáticos



const pokedex =[//um arrey de objetos
  { //objetos são separados por vírgula
    id: 1,
    nome: "Pikachu",
    descricao: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    tipo: "eletric" ,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
  },
  { 
  id:2 ,
  nome: "Charmander",
    descricao: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    tipo: "fire" ,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
  },
  { 
    id:3 ,
    nome: "Squirtle",
      descricao: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
      tipo: "water" ,
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
    },
]


//rotas
app.get("/index", (req, res) => {
  res.render('index', {pokedex});// É MUITO IMPORTANDO COLOCAR O POKEDEX ENTRE CHAVES COMO JSON SÓ ASSIM A NOSSA RESPOSTA É ENVIADA foi esse code que consegui imprimir na tela está renderizando index na pasta index
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));//ouvindo a porta 3000, rodando nessa porta
// http://localhost:3000/    http://localhost:3000/
// npm run dev

// app.post('/trocar',(req,res)=>{
//   const corpo = req.body
//   const indice = corpo.indice

//   src = imagens[indice]
//   console.log('##corpo da requisição',req.body)
//   console.log('##corpo.indice ',req.body.indice)
//   res.redirect('/')
// })

// app.listen(332,()=>{
//   console.log('o servidor está rodando')
// })