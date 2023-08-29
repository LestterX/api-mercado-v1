const StatusCodes = require('http-status-codes')

const create = (req, res) => {
    return res.status(StatusCodes.OK).json({
        default: 'Create'
    })
}

module.exports = create