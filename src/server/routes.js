const express = require('express')
const { StatusCodes }  = require('http-status-codes')
const routes = express.Router()
const ProdutosController = require('./controllers/ProdutosController')
const VendasController = require('./controllers/VendasController')


routes.get('/', (req, res) => {
    res.status(StatusCodes.OK).json({
        default: 'Server Running'
    })
})

routes.get('/produto', ProdutosController.getAll)
routes.post('/produto', ProdutosController.create)
routes.get('/produto/:id', ProdutosController.getById)
routes.put('/produto/:id', ProdutosController.updateById)
routes.delete('/produto/:id', ProdutosController.deleteById)

routes.get('/venda', VendasController.getAll)
routes.post('/venda', VendasController.create)
routes.get('/venda/:id', VendasController.getById)
routes.put('/venda/:id', VendasController.updateById)
routes.delete('/venda/:id', VendasController.deleteById)

module.exports = routes