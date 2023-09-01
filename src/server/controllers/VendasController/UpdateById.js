const StatusCodes = require('http-status-codes')
const VendasProvider = require('../../shared/VendasProvider')

const updateById = (req, res) => {
    const id = req.params.id
    const data = req.body

    VendasProvider.updateByIdProvider(data, id)
    
    return res.status(StatusCodes.OK).json({
        default: 'updated'
    })
}

module.exports = updateById