const Utils = require('../utils')
const utils = new Utils('Produtos', null)

const updateByIdProvider = (data, id) => {
    
    const produtos = utils.getProductData()
    produtos[id] = data

    utils.setProductData(produtos)
}

module.exports = updateByIdProvider