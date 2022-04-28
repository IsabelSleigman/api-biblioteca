import express from "express";

const app = express();

app.use(express.json())

const livros = [
    { id: 1, "titulo": "Senhor dos Aneis" },
    { id: 2, "titulo": "O Hobbit" }
]

app.get('/', (requisicao, resposta) => {
    resposta.status(200).send('Curso de node');
})

app.get('/livros', (requisicao, resposta) => {
    resposta.status(200).json(livros);

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