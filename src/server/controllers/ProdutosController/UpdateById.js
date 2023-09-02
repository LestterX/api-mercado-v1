const StatusCodes = require('http-status-codes')
const ProdutosProvider = require('../../shared/ProdutosProvider')

const updateById = (req, res) => {
    
    const id = req.params.id
    const data = req.body

    const produtoId = ProdutosProvider.updateByIdProvider(data, id)
    
    if(produtoId instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: produtoId.message
        })
    }

    return res.status(StatusCodes.NO_CONTENT).send()
}

module.exports = updateById