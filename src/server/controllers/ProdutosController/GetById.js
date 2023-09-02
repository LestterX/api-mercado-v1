const StatusCodes = require('http-status-codes')
const ProdutosProvider = require('../../shared/ProdutosProvider')

const getById = (req, res) => {

    const produto = ProdutosProvider.getByIdProvider(req.params.id)
    if(produto instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: produto.message
        })
    }
    return res.status(StatusCodes.OK).json({
        result: produto
    })
    
}

module.exports = getById