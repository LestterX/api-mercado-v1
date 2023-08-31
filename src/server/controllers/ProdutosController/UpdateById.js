const StatusCodes = require('http-status-codes')
const ProdutosProvider = require('../../shared/ProdutosProvider')

const updateById = (req, res) => {
    const id = req.params.id
    const data = req.body

    ProdutosProvider.updateByIdProvider(data, id)
    
    return res.status(StatusCodes.OK).json({
        default: 'updated'
    })
}

module.exports = updateById