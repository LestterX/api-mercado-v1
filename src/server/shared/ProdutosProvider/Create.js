const Utils = require('../utils.js')

const utils = new Utils('Produtos', null)

const createProvider = (data) => {
    const produtos = utils.getProductData()
    const newProductId = Math.floor(1000 + Math.random() * 9000)

    produtos[newProductId] = data

    utils.setProductData(produtos)
}

module.exports = createProvider