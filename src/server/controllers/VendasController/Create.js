const StatusCodes = require('http-status-codes')
const VendasProvider = require('../../shared/VendasProvider')

const create = (req, res) => {
    const data = req.body

    const createId = VendasProvider.createProvider(data)

    return res.status(StatusCodes.CREATED).json({
        default: createId
    })
}

module.exports = create