import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json())

routes(app)

app.get('/livros/:id', (requisicao, resposta) => {
    let index = buscaLivro(requisicao.params.id);
    resposta.status(200).json(livros[index]);
})

app.put('/livros/:id', (requisicao, resposta) => {
    let index = buscaLivro(requisicao.params.id);
    livros[index].titulo = requisicao.body.titulo;
    resposta.status(200).json(livros[index]);
})

app.delete('/livros/:id', (requisicao, resposta) => {
    let { id } = requisicao.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    resposta.send(`'Livro ${id} removido com sucesso!'`);
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app;