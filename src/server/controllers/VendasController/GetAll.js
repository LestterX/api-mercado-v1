const StatusCodes = require('http-status-codes')
const VendasProvider = require('../../shared/VendasProvider')

const getAll = (req, res) => {

    const data = VendasProvider.getAllProvider()

    return res.status(StatusCodes.OK).json({
        result: data
    })
}

module.exports = getAll