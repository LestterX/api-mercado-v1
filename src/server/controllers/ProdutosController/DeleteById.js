const StatusCodes = require('http-status-codes')
const ProdutosProvider = require('../../shared/ProdutosProvider')

const deleteById = (req, res) => {

    const deleteByIdProvider = ProdutosProvider.deleteByIdProvider(req.params.id)

    if (deleteByIdProvider instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: deleteByIdProvider.message
        })
    }
    
    return res.status(StatusCodes.NO_CONTENT).send()

}

module.exports = deleteById