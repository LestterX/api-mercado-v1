const StatusCodes = require('http-status-codes')
const VendasProvider = require('../../shared/VendasProvider')

const updateById = (req, res) => {

    const id = req.params.id
    const data = req.body

    const vendasId = VendasProvider.updateByIdProvider(data, id)
    
    if(vendasId instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: vendasId.message
        })
    }

    return res.status(StatusCodes.NO_CONTENT).send()

}

module.exports = updateById