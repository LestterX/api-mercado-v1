const Utils = require('../utils')
const utils = new Utils(null, 'Vendas')

const updateByIdProvider = (data, id) => {
    
    const vendas = utils.getSellData()
    vendas[id] = data

    utils.setSellData(vendas)
}

module.exports = updateByIdProvider