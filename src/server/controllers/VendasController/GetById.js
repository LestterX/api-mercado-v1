const StatusCodes = require('http-status-codes')
const VendasProvider = require('../../shared/VendasProvider')

const getById = (req, res) => {
    const venda = VendasProvider.getByIdProvider(req.params.id)

    if(venda instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: venda.message
        })
    }

    return res.status(StatusCodes.OK).json({
        result: venda
    })
}

module.exports = getById