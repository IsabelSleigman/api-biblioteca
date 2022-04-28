import express from "express";

const app = express();

const livros = [
    {
        id: 1, "titulo": "Senhor dos Aneis"
    },
    {
        id: 2, "titulo": "O Hobbit"
    }
]

app.get('/', (requisicao, resposta) => {
    resposta.status(200).send('Curso de node')
})

app.get('/livros', (requisicao, resposta) => {
    resposta.status(200).json(livros)
})

export default app;