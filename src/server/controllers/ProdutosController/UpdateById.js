const StatusCodes = require('http-status-codes')

const updateById = (req, res) => {
    return res.status(StatusCodes.OK).json({
        default: 'updateById'
    })
}

module.exports = updateById