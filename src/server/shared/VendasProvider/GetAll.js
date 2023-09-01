const Utils = require('../utils.js')

const utils = new Utils(null, 'Vendas')

const getAllProvider = () => {
    return utils.getSellData()
}

module.exports = getAllProvider