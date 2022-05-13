import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json())

app.get('/', (requisicao, resposta) => {
    resposta.status(200).send('Curso de node');
})

app.get('/livros', (requisicao, resposta) => {
    livros.find((err, livros) => {
        resposta.status(200).json(livros);
    })
 
})

app.get('/livros/:id', (requisicao, resposta) => {
    let index = buscaLivro(requisicao.params.id);
    resposta.status(200).json(livros[index]);
})

app.post('/livros', (requisicao, resposta) => {
    livros.push(requisicao.body);
    resposta.status(201).send('Livro cadastrado com sucesso!');
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