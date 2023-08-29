const server = require('./server/server')
const PORT = process.env.PORT || 3030
const HOST = process.env.HOST || undefined

server.listen(PORT, HOST, () => {
    console.log(`Server running on port: ${PORT}`);
})