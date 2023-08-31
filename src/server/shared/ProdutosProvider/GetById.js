const Utils = require('../utils.js')
const utils = new Utils('Produtos')

const getByIdProvider = (id) => {
    const produtos = utils.getProductData()

    return produtos[id]
}

module.exports = getByIdProvider