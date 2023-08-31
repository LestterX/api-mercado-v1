const StatusCodes = require('http-status-codes')
const ProdutosProvider = require('../../shared/ProdutosProvider')

const create = (req, res) => {
    const data = req.body
    const barcode = String(10000000000 + Math.random() * 90000000000)

    
    if(data.barcode === '') data.barcode = barcode

    ProdutosProvider.createProvider(data)

    return res.status(StatusCodes.CREATED).json({
        default: 'created'
    })
}

module.exports = create