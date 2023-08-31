const StatusCodes = require('http-status-codes')
const ProdutosProvider = require('../../shared/ProdutosProvider')

const path = require('path')
const prodsPath = path.resolve(__dirname, '..', '..', 'shared', 'Produtos.json')

const getAll = (req, res) => {

    const data = ProdutosProvider.getAllProvider()

    return res.status(StatusCodes.OK).json({
        result: data
    })
}

module.exports = getAll