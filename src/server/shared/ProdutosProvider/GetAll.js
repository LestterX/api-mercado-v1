const Utils = require('../utils.js')

const utils = new Utils('Produtos', null)

const getAllProvider = () => {
    return utils.getProductData()
}

module.exports = getAllProvider