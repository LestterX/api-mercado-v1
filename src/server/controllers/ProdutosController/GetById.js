const StatusCodes = require('http-status-codes')
const ProdutosProvider = require('../../shared/ProdutosProvider')

const getById = (req, res) => {
    const produto = ProdutosProvider.getByIdProvider(req.params.id)
    return res.status(StatusCodes.OK).json({
        result: produto
    })
}

module.exports = getById