const express = require('express')
const { StatusCodes }  = require('http-status-codes')
const routes = express.Router()
const ProdutosController = require('./controllers/ProdutosController')
const VendasController = require('./controllers/VendasController')
const LoginController = require('./controllers/LoginController')
const Middlewares = require('./shared/middlewares')


routes.get('/', (req, res) => {
    res.status(StatusCodes.OK).json({
        default: 'Server Running'
    })
})

routes.post('/login', LoginController.auth)
routes.post('/logout', LoginController.logOut) //Login Required

routes.get('/produto', ProdutosController.getAll)
routes.post('/produto', Middlewares.verifyToken, ProdutosController.create) //Login Required
routes.get('/produto/:id', ProdutosController.getById)
routes.put('/produto/:id', Middlewares.verifyToken, ProdutosController.updateById) //Login Required
routes.delete('/produto/:id', Middlewares.verifyToken, ProdutosController.deleteById) //Login Required

routes.get('/venda', VendasController.getAll)
routes.post('/venda', Middlewares.verifyToken, VendasController.create) //Login Required
routes.get('/venda/:id', VendasController.getById)
routes.put('/venda/:id', Middlewares.verifyToken, VendasController.updateById) //Login Required
routes.delete('/venda/:id', Middlewares.verifyToken, VendasController.deleteById) //Login Required

module.exports = routes