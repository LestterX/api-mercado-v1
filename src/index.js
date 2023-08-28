const server = require('./server/server')
const PORT = process.env.PORT || 3030

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
})