const Utils = require('../utils.js')

const utils = new Utils('Produtos', null)

const createProvider = (data) => {
    console.log(data);
    const produtos = utils.getProductData()
    const newProductId = Math.floor(1000 + Math.random() * 9000)

    produtos[newProductId] = data

    console.log(produtos);
    utils.setProductData(produtos)
}

module.exports = createProvider