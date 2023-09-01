const Utils = require('../utils.js')
const utils = new Utils(null, 'Vendas')

const getByIdProvider = (id) => {
    const vendas = utils.getSellData()

    return vendas[id]
}

module.exports = getByIdProvider