const http = require('http');
const port = 3000;

const server = http.createServer((requisicao, resposta) => {
    resposta.writeHead(200, { 'Content-Type': 'text/plain' });
    resposta.end('Curso de Node')
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
});