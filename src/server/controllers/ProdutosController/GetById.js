const StatusCodes = require('http-status-codes')

const getById = (req, res) => {
    return res.status(StatusCodes.OK).json({
        default: 'getById'
    })
}

module.exports = getById