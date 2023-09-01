const StatusCodes = require('http-status-codes')
const VendasProvider = require('../../shared/VendasProvider')

const getById = (req, res) => {
    const venda = VendasProvider.getByIdProvider(req.params.id)
    return res.status(StatusCodes.OK).json({
        result: venda
    })
}

module.exports = getById