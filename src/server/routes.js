const express = require('express')
const { StatusCodes }  = require('http-status-codes')
const routes = express.Router()
const ProdutosController = require('./controllers/ProdutosController')


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

module.exports = routes