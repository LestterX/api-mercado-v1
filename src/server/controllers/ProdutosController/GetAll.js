const StatusCodes = require('http-status-codes')

const getAll = (req, res) => {
    return res.status(StatusCodes.OK).json({
        default: 'getAll'
    })
}

module.exports = getAll