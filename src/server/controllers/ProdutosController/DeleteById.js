const StatusCodes = require('http-status-codes')

const deleteById = (req, res) => {
    return res.status(StatusCodes.OK).json({
        default: 'Delete'
    })
}

module.exports = deleteById